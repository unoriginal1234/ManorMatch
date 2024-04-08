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
  photo: String,
  specialties: [{ specialty1: String,
                  specialty2: String,
                  specialty3: String,
                  specialty4: String,
                  specialty5: String}]
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

const serviceSchema = new mongoose.Schema({
  category: String,
  description: String,
  photo: String
  serviceDetails: { detail1: String,
                     detail2: String,
                     detail3: String,
                     detail4: String,
                     detail5: String }
})

const Customer = mongoose.model('Customer', customerSchema);

const Vendor = mongoose.model('Vendor', vendorSchema);

const Booking = mongoose.model('Booking', bookingSchema);

const Message = mongoose.model('Message', messageSchema);

const Service = mongoose.model('Service', serviceSchema);

export default { Customer, Vendor, Booking, Message, Service };
