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

const vendorImages = [
  'https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1620919235663-61eb4a25bb51?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1577926373616-dc964aae15bd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1611420890968-c87853bfa973?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1597201278257-3687be27d954?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607642857266-88f5f03e66c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdWZmZXVyfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1532264251691-2ad92a2ec88f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1514803400321-3ca29fc47334?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1556710808-a2bc27a448f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580894732930-0babd100d356?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1633655442168-c6ef0ed2f984?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579656559983-5fa194b1994d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1709913472141-b6ad54960da2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

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
      photo: vendorImages[i],
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

async function seedAddress() {
  const customers = await db.Customer.find().limit(50).select('_id');

  for(let i = 0; i < 300; i++) {
    let address = new db.Address({
      customerId: faker.helpers.arrayElement(customers),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zip: faker.location.zipCode(),
    });

    try {
      await address.save();
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
  await db.Address.deleteMany({});
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
  await seedAddress();
  console.log('Address seeding complete');
}

seedDatabase();
