import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import router from './routes/routes.js';
import Stripe from 'stripe';
import morgan from 'morgan';

import * as auth from './middleware/auth.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(cookieParser());
app.use(auth.createSession);

app.use('/', router);

app.get('/clear-cookie', (req, res) => {
  res.cookie('s_id', '', { expires: new Date(0) });
  res.send('Cookie cleared');
});

app.post('/checkout', async (req, res) => {
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

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

