import * as models from '../../database/models/index.js'

const getVendors= async (req, res) => {
  const { category } = req.query;
  models.vendors.getVendorsByCategory(category)
    .then((vendors) => {
      res.status(200).send(vendors);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ message: 'Server Error' });
    })
};

export { getVendors };
