import dotenv from 'dotenv';
dotenv.config();
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import router from './routes/routes.js';
import morgan from 'morgan';
import * as auth from './middleware/auth.js';

const app = express();
app.use(cors({
  origin: 'https://66158a051c72c01bea162e3d--manormatch.netlify.app',
}));
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'https://66158a051c72c01bea162e3d--manormatch.netlify.app',
    methods: ["GET", "POST"]
  },
});
app.use(express.json());
app.use(morgan('dev'));

app.use(cookieParser());
app.use(auth.createSession);

app.use('/', router);

app.get('/clear-cookie', (req, res) => {
  res.cookie('s_id', '', { expires: new Date(0) });
  res.send('Cookie cleared');
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('message', (message) => {
    console.log('New message', message);
    io.emit('message', message);
  })
 });

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

