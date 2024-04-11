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

export const getBookings = async (req, res) => {
  const { userId } = req.query;
  console.log('userId', userId);
  await models.user.getBookings(userId)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: 'error getting bookings:', err})
  })
};

export const getAddresses = async (req, res) => {
  const { userId } = req.query;
  await models.user.getAddresses(userId)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: 'error getting addresses:', err})
  })
}