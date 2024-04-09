import * as models from '../../database/models/index.js'

export const getUserInfo = async (req, res) => {
  const { email } = req.query;
  await models.user.getUserInfo(email)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: 'error getting user info:', err})
  })
};