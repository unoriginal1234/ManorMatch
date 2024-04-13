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

<p>
    Instructions to setup Pixel Pouch on your local machine below.
</p>

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/LukeLarson2/project-pixel-pouch.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your port, API URL, and Github Token in `.env.local` file
   ```sh
    NEXT_PUBLIC_SUPABASE_URL = (your supabase database URL)
    NEXT_PUBLIC_SUPABASE_ANON_KEY = (your supabase token)
   ```
4. Run in dev environment.
   ```sh
   npm run dev
   ```

## Usage

Pixel Pouch is run on the designated port. It can also be accessed utilizing localhost:PORT directly in the browser.

Run linter: `npm run lint `

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Include a client landing page with folder/file navigation
- [x] Develop a file preview page with enlarge image previews
- [x] Implement client new message notification system
- [x] Integrate upload file to a specified directory
- [x] Inovate a cleat client managment gui for admin to navigate/create clients, folders and files
- [ ] Leverage Stripe API for subscriptions

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

1.  Reduction in query times leveraging the RDMBS structure of supabase reducing latency to 53ms on login screen with 0% error rate and 100 RPS throughput
1.  Modernized the user experience with responsive layouts allowing for mobile and desktop usage
1.  Refined the ease of use for clients with eliminating need of file navigation to upload to a particular file

<!-- CONTRIBUTING -->

## Contributing

Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word!

<!-- CONTACT -->

## Contact

<h3 align='center'> Luke</h3>
<h4 align='center'>
  <a href="https://www.linkedin.com/in/lucas-m-larson/">Linkedin</a> |
  <a href="https://github.com/LukeLarson2">GitHub</a>
</h4>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### GIT WORKFLOW
before we push up any feature:\
git checkout to dev\
git pull origin dev\
git checkout to feature branch\
(if needed) git merge dev\
THEN
