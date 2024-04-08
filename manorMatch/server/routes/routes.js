import express from 'express';
import * as controllers from '../controllers/index.js'
import { verifyAuthorized } from '../middleware/auth.js';

var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)
router.post('/login', controllers.permissions.login)
router.post('/signup', controllers.permissions.signup)
router.get('/vendors', controllers.vendors.getVendors)
router.post('/logout', verifyAuthorized, controllers.permissions.logout)
router.get('*', (req, res) => {
  const restrictedRoutes = ['/logout'];
  if (restrictedRoutes.includes(req.path)) {
    return res.redirect('/login'); // need to update to render the login page correctly
  }
  res.status(404).send('Page not found');
});




export default router;