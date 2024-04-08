import db from '../db.js';

export const getUserInfo = () => {
  console.log('this happened');
}

export const signup = async (email, password) => {
  try {
    const newCustomer = new db.Customer({
      email: email,
      password: password
    });

    await newCustomer.save();
    console.log('customer created', newCustomer);
  } catch (err) {
    console.error(err);
  }
}

export const logout = () => {
  console.log('logout attempted');
}