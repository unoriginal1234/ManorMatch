import * as models from '../../database/models/index.js'
const getServices = async (req, res) => {
  models.services.getServices()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
}

export { getServices };