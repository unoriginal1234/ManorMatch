import * as models from '../../database/models/index.js'

const getUserInfo = (req, res) => {
  console.log('request received')
  models.permissions.getUserInfo()
  .then((response) => {
    res.send(response)
  })
  .catch((err) => {
    console.error(err)
  })
}

export { getUserInfo };