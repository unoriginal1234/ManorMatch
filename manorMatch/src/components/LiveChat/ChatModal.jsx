import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom.jsx';
import io from 'socket.io-client';

const ChatModal = () => {
  const [chatModal, setChatModal] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    return () => {
      newSocket.off('connect');
      newSocket.disconnect();
    };
  }, []);

  const toggleChatModal = () => {
    setChatModal(!chatModal);
  };


console.log('chatModal')
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="chat-modal bg-white p-8 rounded-lg shadow-lg border-red-500 border-1">
        {socket && <ChatRoom socket={socket} toggleChatModal={toggleChatModal}/>}
      </div>
    </div>
  );
};

export default ChatModal;