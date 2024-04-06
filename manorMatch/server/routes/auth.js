import express from 'express';

var router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

export default router;
