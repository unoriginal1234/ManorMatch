import * as models from '../../database/models/index.js'

const createSession = (req, res, next) => {
  console.log(req.cookies, 'req cookies in auth')
  Promise.resolve(req.cookies.id)
    .then(hash => {
      if (!hash) {
        throw Error('No cookie found');
      }
      return models.Sessions.get({ hash })
    })
    .then(session => {
      if (!session) {
        throw Error('no session found')
      }
    })
    .catch(err => {
      return models.Session.create()
        .then(results => {
          return models.Sessions.get({ id: results.insertId });
        })
        .then(session => {
          res.cookie('someid', session.hash);
          return session;
        })
    })
    .then((session => {
      req.session = session;
      next();
    }))
}

const verifySession = (req, res, next) => {

}