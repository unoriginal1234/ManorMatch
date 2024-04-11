import db from '../db.js';

export const getUserInfo = async (email) => {
  const userInfo = await db.Customer.find({ email: email });
  return userInfo;
}

export const getBookings = async (userId) => {
  const bookings = await db.Booking.find({ customerId: userId });
  return bookings;
}

export const getAddresses = async (userId) => {
  const addresses = await db.Address.find({ customerId: userId });
  return addresses;
}

export const createAddress = async (userId, address) => {
  console.log('userId', userId, 'address', address)
  const newAddress = new db.Address({
    customerId: userId,
    address1: address.address1,
    address2: address.address2,
    city: address.city,
    state: address.usState,
    zip: address.zip,
  });
  await newAddress.save();
  return newAddress;
}