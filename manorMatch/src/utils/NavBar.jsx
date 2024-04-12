import { Link } from 'react-router-dom';

const NavBar = ({ children }) => {
  return (
    <div className="bg-[#30011E] text-mmsand w-full">
      <div className="flex justify-between items-center py-3">
        <Link to="/" className="text-4xl ml-4">
          <span className="tracking-wider font-serif hover:text-mmcream">M|M</span>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
