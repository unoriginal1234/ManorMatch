import express from 'express';
import * as controllers from '../controllers/index.js'

var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)

export default router;