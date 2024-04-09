import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom.jsx';
import io from 'socket.io-client';
import { socket } from '../../socket.js'; // This is the socket connection, specifically for the chat room

const ChatModal = ({ toggleChatModal, socket }) => {
  const [chatModal, setChatModal] = useState(false);
 //  const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log('socketID', socket.id); // x8WIv7-mJelg7on_ALbx
  //   });

  //   return () => {
  //     socket.off('connect');
  //   };
  // }, []);



console.log('chatModal')
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-00 flex justify-center items-center">
    <div className="chat-modal bg-white p-8 rounded-lg shadow-lg border-red-500 border-1" style={{ width: '80%', height: '80%' }}>
      {socket && <ChatRoom socket={socket} toggleChatModal={toggleChatModal}/>}
      <button onClick={toggleChatModal}>Close Chat</button>
    </div>
  </div>
  );
};

export default ChatModal;