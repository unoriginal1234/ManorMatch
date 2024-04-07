import db from '../db.js';

const getVendorsByCategory = (category) => {
  return db.Vendor.find({category})
}


export { getVendorsByCategory };