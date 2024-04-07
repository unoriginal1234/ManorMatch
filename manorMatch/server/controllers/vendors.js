import * as models from '../../database/models/index.js'

const getVendors= async (req, res) => {
  console.log(req.query);
  try {
    const { category } = req.query;
    const vendors = models.vendors.getVendorsByCategory(category);
    res.status(200).json(vendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getVendors };
