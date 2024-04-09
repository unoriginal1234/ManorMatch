import mongoose from 'mongoose';
import db from './db.js';
import { faker } from "@faker-js/faker";

const vendorCategories = [
  'Personal Chef',
  'Au Pair',
  'Estate Management',
  'Butler',
  'Housekeepers',
  'Landscaper',
  'Personal Assistant',
  'Chauffeur',
  'Security Personnel',
  'Pool Maintenance Technician',
  'Personal Trainer',
  'Smart Home Technician',
  'Sommelier',
  'Private Tutor',
  'Art Curator',
  'Personal Stylist',
  'Pillow Fluffer',
  'LeetCode Tutor',
  'Sconce Restorer',
  'Toile Fabricator',
];

const serviceDescriptions = [
  "Crafting personalized culinary experiences",
  "Caring support for your family's needs",
  "Effortless coordination of your estate",
  "Discreet assistance with elegance",
  "Maintaining impeccable living spaces",
  "Creating stunning outdoor retreats",
  "Your dedicated organizational ally",
  "Smooth and luxurious transportation",
  "Guardians of your peace of mind",
  "Keeping your pool pristine",
  "Tailored fitness empowerment",
  "Intelligent living made easy",
  "Curating exquisite wine experiences",
  "Personalized learning guidance",
  "Transforming spaces with curated art",
  "Crafting your unique style",
  "Ensuring plush comfort",
  "Mastering coding challenges made simple",
  "Preserving vintage lighting elegance",
  "Crafting bespoke luxury fabrics",
]

function getRandomVendorCategory() {
  return vendorCategories[Math.floor(Math.random() * vendorCategories.length)];
}

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
      category: getRandomVendorCategory(),
      telephoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      price: faker.commerce.price(),
      photo: faker.image.urlPicsumPhotos(),
      specialties:
        [{
          specialty1: faker.company.buzzPhrase(),
          specialty2: faker.company.buzzPhrase(),
          specialty3: faker.company.buzzPhrase(),
          specialty4: faker.company.buzzPhrase(),
          specialty5: faker.company.buzzPhrase(),
        }]
    });

    try {
      await vendor.save();
    } catch (err) {
      console.log(err);
    }
  }
}

async function seedBooking() {
  // Fetch all customer IDs and vendor IDs first
  const customers = await db.Customer.find().select('_id');
  const vendors = await db.Vendor.find().select('_id category price');

  for (let i = 0; i < 100; i++) {
    // Randomly select a customer and a random number of services from the vendors
    const randomCustomerIndex = Math.floor(Math.random() * customers.length);
    const selectedCustomer = customers[randomCustomerIndex];

    const servicesCount = Math.floor(Math.random() * 5) + 1;
    let services = [];
    for (let j = 0; j < servicesCount; j++) {
      const randomVendorIndex = Math.floor(Math.random() * vendors.length);
      const selectedVendor = vendors[randomVendorIndex];
      services.push({
        vendorId: selectedVendor._id,
        category: selectedVendor.category,
        price: selectedVendor.price,
      });
    }

    let booking = new db.Booking({
      customerId: selectedCustomer._id,
      services: services,
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

async function seedService() {
  for(let i = 0; i < vendorCategories.length; i++) {
    let service = new db.Service({
      category: vendorCategories[i],
      description: serviceDescriptions[i],
      photo: faker.image.url(),
      serviceDetails: {
        detail1: faker.company.buzzPhrase(),
        detail2: faker.company.buzzPhrase(),
        detail3: faker.company.buzzPhrase(),
        detail4: faker.company.buzzPhrase(),
        detail5: faker.company.buzzPhrase(),
      }
    });

    try {
      await service.save();
    } catch (err) {
      console.log(err);
    }
  }
}

const seedDatabase = async () => {
  await db.Customer.deleteMany({});
  await db.Vendor.deleteMany({});
  await db.Booking.deleteMany({});
  await db.Message.deleteMany({});
  await db.Service.deleteMany({});
  console.log('Dropped all previous collections')
  await seedCustomer();
  console.log('Customer seeding complete');
  await seedVendor();
  console.log('Vendor seeding complete');
  await seedBooking();
  console.log('Booking seeding complete');
  await seedMessage();
  console.log('Message seeding complete');
  await seedService();
  console.log('Service seeding complete');
}

seedDatabase();
