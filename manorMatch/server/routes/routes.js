import express from 'express';
import * as controllers from '../controllers/index.js'

var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)

router.get('/vendors', controllers.vendors.getVendors)

export default router;