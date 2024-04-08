import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/routes.js';

import morgan from 'morgan';

import * as auth from './middleware/auth.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(morgan('dev'));

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../dist')));


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