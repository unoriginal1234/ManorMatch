import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import router from './routes/routes.js';

import morgan from 'morgan';

import * as auth from './middleware/auth.js';

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


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});