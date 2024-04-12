import * as models from '../../database/models/index.js'

export const createBooking = async (req, res) => {
  await models.bookings.addBooking(req.body)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json({message: 'error adding booking:', err})
  })
}