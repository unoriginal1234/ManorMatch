import { v4 as uuidv4 } from 'uuid';

export const createLogin = (req, res, next) => {
  let cookieString = req.get("Cookie") || "";
  console.log(cookieString, 'req.get("Cookie")')

  let parsedCookies = cookieString.split("; ").reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf("=");
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {});

  if (parsedCookies.loggedIn) {
    req.loggedIn = parsedCookies.loggedIn;
  } else {
    res.cookie("loggedIn", req.loggedIn);
  }
  next();
};

export const verifyAuthorized = (req, res, next) => {
  // const isProtectedRoute = req.path !== '/' && req.path !== '/login' && req.path !== '/signup';

  // const isLoggedIn = req.cookies.user_id || false;

  // console.log(isProtectedRoute, !isLoggedIn)

  // if (isProtectedRoute && !isLoggedIn) {
  //   console.log('cant access route')
  //   res.redirect('/login');
  // }
  if (!req.session_id || !req.cookies.user_id) {
    if (req.xhr) {
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      return res.redirect('/login');
    }
  }
  next();
};

options:
look at