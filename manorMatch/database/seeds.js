import mongoose from 'mongoose';
import db from './db.js';
import { faker } from "@faker-js/faker";

async function seedCustomer() {
  for(let i = 0; i < 100; i++) {
    let customer = new db.Customer({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zip: faker.location.zipCode(),
      telephoneNumber: faker.phone.number(),
      email: faker.internet.email(),
    });

    try {
      await customer.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedVendor() {
  for(let i = 0; i < 100; i++) {
    let vendor = new db.Vendor({
      name: faker.company.name(),
      serviceDescription: faker.company.buzzPhrase(),
      category: faker.commerce.department(),
      telephoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      price: faker.commerce.price(),
    });

    try {
      await vendor.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedBooking() {
  for(let i = 0; i < 100; i++) {
    let booking = new db.Booking({
      customerId: faker.number.bigInt(),
      vendorId: faker.number.bigInt(),
      jobDate: faker.date.future(),
      completed: faker.datatype.boolean(),
    });

    try {
      await booking.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedMessage() {
  for(let i = 0; i < 100; i++) {
    let message = new db.Message({
      content: faker.word.words({ count: { min: 5, max: 10 } }),
      sender: faker.internet.email(),
      createdAt: faker.date.recent(),
    });

    try {
      await message.save();
    } catch (err) {
      console.log(err);
    }
  }
}

const seedDatabase = async () => {
  await seedCustomer();
  console.log('Customer seeding complete');
  await seedVendor();
  console.log('Vendor seeding complete');
  await seedBooking();
  console.log('Booking seeding complete');
  await seedMessage();
  console.log('Message seeding complete');
}

seedDatabase();
