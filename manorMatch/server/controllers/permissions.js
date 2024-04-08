import * as models from '../../database/models/index.js'

export const getUserInfo = (req, res) => {
  models.permissions.getUserInfo()
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  await models.permissions.login(email, password)
  .then(response => {
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(500).json({message: 'login failed'})
    }
  })
  .catch(err => {
    console.error(err)
  })
};

export const signup = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  models.permissions.signup(firstName, lastName, email, password);
  res.status(200).json({ message: 'Signup successful' });
}

export const logout = (req, res) => {
  console.log('logout in controllers received')
  models.permissions.logout();
}
