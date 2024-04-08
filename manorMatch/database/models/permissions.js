import db from '../db.js';

export const getUserInfo = () => {
  console.log('this happened');
}

export const login = async (email, password) => {
  try {
    const dbFind = await db.Customer.find({ email: email });
    if (dbFind[0].email === email && dbFind[0].password === password) {
      return true;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (err) {
    console.error(err);
  }
}

export const signup = async (firstName, lastName, email, password) => {
  try {
    const newCustomer = new db.Customer({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });

    await newCustomer.save();
    // console.log('customer created', newCustomer);
  } catch (err) {
    console.error(err);
  }
}

export const logout = () => {
  console.log('logout attempted');
}