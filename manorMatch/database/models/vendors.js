import db from '../db.js';

const getVendorsByCategory = async (category) => {
  const result = await db.Vendor.find({ category: category});
  return result;
}


export { getVendorsByCategory };