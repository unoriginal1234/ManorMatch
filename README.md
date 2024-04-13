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

![node.js](https://img.shields.io/badge/node-%23000000.svg?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-%23000000.svg?style=for-the-badge&logo=react&logoColor)
![Nextjs](https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js)
![Supabase](https://img.shields.io/badge/supabase-%23000000.svg?style=for-the-badge&logo=supabase)
![Typescript](https://img.shields.io/badge/typescript-%23000000.svg?style=for-the-badge&logo=typescript)

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
