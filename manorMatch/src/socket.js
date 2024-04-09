import { io } from 'socket.io-client'; // importing io function from client library, used to establish connection w/ socket.io server

const URL = 'http://localhost:3000';   // define the URL of the server, in this case, the server is running on localhost:5173

//const url = ''

export const socket = io(URL);   // use io() function to connoect to server at this URL