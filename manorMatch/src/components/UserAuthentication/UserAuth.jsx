import { Link } from 'react-router-dom';

const UserAuth = () => {
  // Your component logic goes here

  return (
    <div>
      This is the User Authentication
      <div className="">
        Login
        <form>
          <div>
            <label>Email Address:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="text"></input>
          </div>
          <button type="submit">Login</button>
          Don't have an account?&nbsp;
          <Link>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;