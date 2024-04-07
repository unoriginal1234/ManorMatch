import express from 'express';
import * as controllers from '../controllers/index.js'

var router = express.Router();

router.get('/username', controllers.permissions.getUserInfo)
router.post('/login', controllers.permissions.login)
router.post('/signup', controllers.permissions.signup)

export default router;