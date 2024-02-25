# NearH - Hospital Comparison App

## Overview

NearH is a web application that helps users find and compare hospitals based on the availability of services and associated rates. It provides a user-friendly platform for individuals seeking quality and affordable healthcare options.

## Features

- **Hospital Listings:** View a list of registered hospitals.
- **Service Comparison:** Compare hospitals based on available services.
- **Rate Comparison:** Compare the rates of different services across hospitals.

## Technologies Used

- **Frontend:**
  - React.js
  - Vite.js
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mohdmusaiyab/nearH
   
 2. **Install Dependencies in client for Frontend:**
    ```bash
    cd nearH/client
    npm i
 3. **Install Dependencies in server fro Backend:**
       ```bash
    cd nearH/server
    npm i
4. **Set Up Environment Variables:**
   ```env
   MONGO_URI=your_mongo_db_uri
   PORT=your_server_port
5.**Start the frontend and backend server**
```bash
       cd client
       npm run dev
       cd server
       node index.js
