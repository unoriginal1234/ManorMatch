import Vendor from '../../database/db.js';

const getVendorsByCategory = async (req, res) => {
  console.log(req.params);
  try {
    const { category } = req.params;
    const vendors = await Vendor.find({ category });
    res.status(200).json(vendors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getVendorsByCategory };
