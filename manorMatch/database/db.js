import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database connected')
});

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  telephoneNumber: String,
  email: String
})

const vendorSchema = new mongoose.Schema({
  name: String,
  serviceDescription: String,
  category: String,
  telephoneNumber: String,
  email: String,
  price: Number,
  photo: String
})

const bookingSchema = new mongoose.Schema({
  customerId: String,
  vendorId: String,
  jobDate: Date,
  completed: Boolean
})

const messageSchema = new mongoose.Schema({
  content: String,
  sender: String,
  createdAt: Date
})

const Customer = mongoose.model('Customer', customerSchema);

const Vendor = mongoose.model('Vendor', vendorSchema);

const Booking = mongoose.model('Booking', bookingSchema);

const Message = mongoose.model('Message', messageSchema);

export default { Customer, Vendor, Booking, Message };
