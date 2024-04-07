import express from 'express';
import * as controllers from '../controllers/index.js'

var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)

router.get('/vendors', () => console.log('received')) //controllers.vendors.getVendorsByCategory)

export default router;