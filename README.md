# Chat Application

## Overview

This project is a web application designed to facilitate real-time chat functionality, online status tracking, and secure authentication. Built with React for the frontend and Node.js for the backend, the application ensures robust data management and secure storage.

## Features

- **Real-Time Chat**: Users can engage in real-time conversations using socket programming.
- **Online Status**: Users can view the online status of other users.
- **Secure Authentication**: Implemented secure login and registration to ensure data protection.
- **Data Management**: Utilizes MongoDB to handle over 500 records with efficient CRUD operations.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io

## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**

   For the frontend:
   ```bash
   cd client
   npm install
   ```

   For the backend:
   ```bash
   cd server
   npm install
   ```

3. **Configuration:**

   Create a `.env` file in the `server` directory and add the following environment variables:
   ```plaintext
   MONGO_URI=<your-mongodb-uri>
   PORT=<your-server-port>
   ```

4. **Run the Application:**

   Start the backend server:
   ```bash
   cd server
   npm start
   ```

   Start the frontend:
   ```bash
   cd client
   npm start
   ```

   The application will be available at `http://localhost:<frontend-port>`.


## Database Schema

- **User**: Stores user information including login credentials and online status.
- **Message**: Stores chat messages with timestamps and user references.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.
