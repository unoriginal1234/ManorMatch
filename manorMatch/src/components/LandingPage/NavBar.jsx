import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-mmblue text-mmsand w-screen">
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold">
          M | M
        </div>
        <div className="mx-2">
          <Link to="/login" className="text-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;