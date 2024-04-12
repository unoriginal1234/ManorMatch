import db from '../db.js';

export const addBooking = async (booking) => {
  try {
    const newBooking = new db.Booking({
      ...booking
    });

    await newBooking.save();
    return newBooking;
  } catch (err) {
    console.error(err);
  }
}