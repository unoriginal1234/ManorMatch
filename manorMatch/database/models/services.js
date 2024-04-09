import db from '../db.js';

const getServices = async () => {
  const result = await db.Service.find({});
  return result;
}

export { getServices };