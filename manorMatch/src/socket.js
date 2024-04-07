import { io } from 'socket.io-client';

const URL = 'http://localhost:5173';   // Connect to the server

export const socket = io(URL);   // Export the socket connection