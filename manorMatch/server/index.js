import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});