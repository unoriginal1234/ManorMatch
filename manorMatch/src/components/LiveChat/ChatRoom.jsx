/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

function ChatRoom({ socket, toggleChatModal }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const messageListener = (payload) => {
      setChat(chat => [...chat, payload]);
      scrollToBottom();
    };

    socket.on('message', messageListener);
    return () => {
      socket.off('message', messageListener);
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('Message sent: ', message);
    socket.emit('message', { id: socket.id.substring(0, 5), message });
    setMessage('');
  };

  console.log('Socket connected333:', socket.connected);
  return (
    <div className="flex flex-col h-full">
      <div id="chat-window" className="bg-mmblue overflow-y-auto text-white flex-grow p-4 ">

        {chat.map((payload, index) => (
          <p key={index} className="mb-2">USER {payload.id}: {payload.message}</p>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow border rounded p-2 mr-2"
          placeholder="Type your message here..."
        /><FaTimes
        onClick={() => {
          toggleChatModal();
          console.log('clicked!')
        }}
        className="absolute top-2 right-2 cursor-pointer"
      />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>

      </form>
    </div>
  );}

export default ChatRoom;