import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

import router from './routes/routes.js'
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);


io.on('connection', (socket) => {
  console.log('New client connected');


  socket.on('message', (message) => {
    console.log('New message', message);
    io.emit('message', message);
  })
 });

 const port = process.env.PORT || 5173;

server.listen(port, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});