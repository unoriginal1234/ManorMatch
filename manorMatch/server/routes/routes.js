import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as controllers from '../controllers/index.js'
import { verifyAuthorized } from '../middleware/auth.js';
import Stripe from 'stripe';
var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)
router.post('/login', controllers.permissions.login)
router.post('/signup', controllers.permissions.signup)
router.post('/logout', verifyAuthorized, controllers.permissions.logout)
router.get('*', (req, res) => {
  const restrictedRoutes = ['/logout'];
  if (restrictedRoutes.includes(req.path)) {
    return res.redirect('/login'); // need to update to render the login page correctly
  }
  res.status(404).send('Page not found');
});


router.get('/vendors', controllers.vendors.getVendors)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
router.post('/checkout', async (req, res) => {
  try {
    const { totalAmount } = req.body;
    const frontendPort = 5173;
    const baseUrl = `${req.protocol}://${req.hostname}:${frontendPort}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Total Payment To ManorMatch',
          },
          unit_amount: totalAmount * 100, // Convert to cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    res.json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export default router;