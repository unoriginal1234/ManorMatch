import { Link } from 'react-router-dom';

const NavBar = ({ children }) => {
  return (
    <div className="bg-[#30011E] text-mmsand w-full">
      <div className="flex justify-between items-center py-3">
        <div className="flex items-center ml-4">
          <Link to="/" className="text-4xl">
            <span className="tracking-wider font-serif hover:text-mmcream">M|M</span>
          </Link>
          <Link to="/home" className="text-2xl px-3 py-1 ml-4 rounded hover:text-mmcream font-semibold transition-colors">
            Home
          </Link>
        </div>
        <div className="mx-4">{children}</div>
      </div>
    </div>
  );
};

export default NavBar;
