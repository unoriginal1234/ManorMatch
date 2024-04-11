/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

function ChatRoom({ socket, toggleChatModal, setIsChatModalOpen }) {
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
    socket.emit('message', { id: socket.id.substring(0, 5), message });
    setMessage('');
  };

  console.log('Socket connected:', socket.connected);
  return (
    <div className="flex flex-col h-full relative">
          <div className="bg-mmsand-200 text-mmsand p-2 pt-8 rounded-t-3xl text-4xl text-center font-bold">
      Live Chat Concierge
    </div>
      <div id="chat-window" className="bg-mmcream overflow-y-auto text-mmblue text-2xl flex-grow p-4 mb-5 border">

        {chat.map((payload, index) => (
          <p key={index} className="bg-mmcream mb-2  ">USER {payload.id}: {payload.message}</p>
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
          setIsChatModalOpen(false);
        }}
        className="absolute top-2 right-2 cursor-pointer fa-2x"
        />
        <button type="submit"
        className="bg-mmblue text-mmsand rounded p-2">Send</button>
      </form>
    </div>
  );}

export default ChatRoom;