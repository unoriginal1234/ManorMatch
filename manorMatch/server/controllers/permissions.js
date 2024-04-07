import * as models from '../../database/models/index.js'

const getUserInfo = (req, res) => {
  models.permissions.getUserInfo()
}

export { getUserInfo };