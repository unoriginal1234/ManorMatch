import { MdOutlineRealEstateAgent } from 'react-icons/md';

const ChatStandIn = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full inline-flex items-center opacity-70">
        <MdOutlineRealEstateAgent size={24} />
        <span className="text-lg">Talk to concierge</span>
      </button>
    </div>
  );
};

export default ChatStandIn;
