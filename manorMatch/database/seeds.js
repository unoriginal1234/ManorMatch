import mongoose from 'mongoose';
import db from './db.js';
import { faker } from "@faker-js/faker";

async function seedDatabase() {
  for(let i = 0; i < 100; i++) {
    let vendor = new db.Vendor({
      name: faker.company.name(),
      serviceDescription: faker.lorem.sentence(),
      category: faker.commerce.department(),
      telephoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      price: faker.commerce.price(),
    });

    try {
      await vendor.save();
      console.log('Vendor saved');
    } catch (err) {
      console.log(err);
    }
  }
}

seedDatabase();
