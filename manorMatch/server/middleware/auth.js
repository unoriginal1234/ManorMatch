export const verifyAuthorized = (req, res, next) => {
  let cookieString = req.get("Cookie") || "";

  let parsedCookies = cookieString.split("; ").reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf("=");
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {});

  const restrictedRoutes = ['/logout', '/home', '/cart', '/profile', '/success'];
  if (!parsedCookies.loggedIn && (req.path !== '/' && req.path !== '/login' && req.path !== '/signup') ) {
    return res.redirect('/login');
  } else if (parsedCookies.loggedIn && !restrictedRoutes.includes(req.path)) {
    return res.redirect('/home');
  }
  next();
};