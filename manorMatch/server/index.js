import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import router from './routes/routes.js'
console.log("INDEX.JS RUNS >>>>  ")
dotenv.config();


const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});
app.use(express.json());

app.use('/', router);


io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('message', (message) => {
    console.log('New message', message);
    io.emit('message', message);
  })
 });

 const port = 5173;

 console.log("PORT >>>", port);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});