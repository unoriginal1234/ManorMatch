import db from '../db.js';

export const getUserInfo = async (email) => {
  const userInfo = await db.Customer.find({ email: email });
  return userInfo;
}

export const getBookings = async (userId) => {
  const bookings = await db.Booking.find({ customerId: userId });
  return bookings;
}