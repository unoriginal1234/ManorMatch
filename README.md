# ManorMatch

<a id='readme-top'> </a>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#optimizations">Optimizations</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

## About

<div align="center">
  <h3>Carousel</h3>
  <img src="manorMatch/public/Recording 2024-04-13 at 12.07.14.gif" alt="project landing page image" width="600px" />
<br />
    <h3>User Portal</h3>
  <img src="manorMatch/public/Recording 2024-04-13 at 12.10.12.gif" alt="project landing page image" width="600px" />
<br />
<h3>Booking</h3>
  <img src="manorMatch/public/Recording 2024-04-13 at 12.24.38.gif" alt="project landing page image" width="600px" />
</div>

<br />
<p>
  ManorMatch is a platform leveraging React, Tailwind, Express, and MongoDB to connect clientele with luxury estate and lifestyle services. We provide an inviting design, intuitive booking and checkout processes, and live chat catering to the needs of busy, high-end users.
</p>

### Built With

![JavaScript](https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript)
![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)
![React Router](https://img.shields.io/badge/react_router-black?style=for-the-badge&logo=react-router)
![Express](https://img.shields.io/badge/express-black?style=for-the-badge&logo=express)
![Node.js](https://img.shields.io/badge/node.js-black?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/mongodb-black?style=for-the-badge&logo=mongodb)
![Mongoose](https://img.shields.io/badge/mongoose-black?style=for-the-badge&logo=mongoose)
![Axios](https://img.shields.io/badge/axios-black?style=for-the-badge&logo=axios)
![Tailwind](https://img.shields.io/badge/tailwind-black?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/vite-black?style=for-the-badge&logo=vite)
![Stripe](https://img.shields.io/badge/stripe-black?style=for-the-badge&logo=stripe)
![Socket.io](https://img.shields.io/badge/socket.io-black?style=for-the-badge&logo=socket.io)

<p align="right">
  (<a href="#readme-top">back to top</a>)
</p>

## Getting Started

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ManorMatch/ManorMatch.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Make a copy of the `.exampleenv` file and rename it to `.env`. Enter the following in the `.env` file. 
   ```sh
    PORT= (your local server port)
    FRONTEND_PORT= (your Vite port)

    MONGODB_URI= (your local mongodb url)
    DB_NAME= (your chosen DB name)

    VITE_STRIPE_PUBLIC_KEY=
    STRIPE_SECRET_KEY=

    VITE_API_URL= http://localhost:3000 || deployed server

    CORS_URL='deployed client'

   ```
4. Run in dev environment.
   ```sh
   npm run dev
   ```
5. Run the server environment from the root directory.
   ```sh
   node server/index.js
   ```
6. Populate the database.
   ```sh
   npm run seed
   ```

## Usage

Manor Match is run on the designated port. It can also be accessed utilizing localhost:PORT directly in the browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Establish the backend using Express and MongoDB to handle data management and API requests
- [x] Implement secure login and registration processes to manage user access and data security
- [x] Design a landing page using React and Tailwind CSS that reflects the sophistication of the ManorMatch brand
- [x] Integrate a user-friendly booking modal that allows clients to easily schedule appointments with service vendors
- [x] Enable users to view upcoming and past bookings and manage their saved addresses
- [x] Showcase available services and their details through a service carousel
- [x] Integrate WebSocket to incorporate a live chat feature enabling users to receive real-time assistance and personalized service recommendations
- [x] Create an intuitive process for booking services
- [x] Leverage Stripe’s payment platform to build a secure checkout and payment process
- [ ] Look into integrating Google Maps’ API for vendor location tracking
- [ ] Build a portal for administrators to see and manage clients, bookings, and vendor relationships more efficiently
      
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations


<!-- CONTRIBUTING -->

## Contributing


<!-- CONTACT -->

## Developers

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### GIT WORKFLOW
before we push up any feature:\
git checkout to dev\
git pull origin dev\
git checkout to feature branch\
(if needed) git merge dev\
THEN
