import db from '../db.js';

const getVendorsByCategory = async (category) => {
  const result = await db.Vendor.find({ category: category});
  return result;
}

const getVendorInfo = async (id) => {
  const result = await db.Vendor.findById(id);
  return result;
}


export { getVendorsByCategory, getVendorInfo };