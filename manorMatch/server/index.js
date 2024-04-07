import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import axios from 'axios';
import cors from 'cors';

import router from './routes/routes.js'

import parseCookies from './middleware/parseCookies.js'

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(parseCookies);
// app.use(Auth.createSession);

app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});