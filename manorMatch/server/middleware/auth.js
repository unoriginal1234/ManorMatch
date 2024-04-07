import * as models from '../../database/models/index.js'

const createSession = (req, res, next) => {
  Promise.resolve(req.cookies.id)
  .then(hash => {
    if (!hash) {
      throw Error('No cookie found');
    }
    return models.Sessions.get({hash})
  })
  .catch(err => {
    return models.Session.create();
      .then(results => {
        return models.Sessions.get({id: results.insertId});
      })
  })
  .then((session => {
    req.session = session;
    next();
  }))
}

const verifySession = (req, res, next) => {

}