import ChatRoom from './ChatRoom.jsx';

const ChatModal = ({ toggleChatModal, socket, setIsChatModalOpen }) => {

  console.log('chatModal')
  return (
    <div className="fixed inset-0 bg-mmsand-600 bg-opacity-00 flex justify-center items-center z-10">
      <div className="chat-modal bg-mmcream pt-0 pr-8 pb-3 pl-8 rounded-lg shadow-lg border-mmpurple border-5" style={{ width: '30%', height: '80%' }}>

        {socket && <ChatRoom socket={socket} toggleChatModal={toggleChatModal} setIsChatModalOpen={setIsChatModalOpen}/>}
        <button onClick={() => {
          toggleChatModal();
          setIsChatModalOpen(false);
        }}>Close Chat</button>
      </div>
    </div>
  );
};


export default ChatModal;