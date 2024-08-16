
# Booking App Backend

This project is the backend for a booking application. The backend is responsible for handling the business logic, database operations, and API endpoints that power the frontend of the booking app. It provides services such as room management, service searching, hotel management, user authentication, and reservation handling.



## Features

- **Room Management:** Handles CRUD operations for room data, including availability, pricing, and details.
- **Search Service:** Provides search functionality for rooms, services, and hotels based on user-defined criteria.
- **Hotel Management:** Manages hotel-related data such as rooms, services, and hotel details.
- **User Authentication:** Supports user registration, login, JWT-based authentication, and profile management.
- **Reservation Management:** Manages booking, modification, and cancellation of reservations.



## Installation

To get started with the backend project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/booking-app-backend.git
   cd booking-app-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following environment variables:

   ```bash
   PORT=5000
   DB_URI=mongodb://localhost:27017/booking-app
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the backend server at `http://localhost:5000`.

## Usage

### Development

- **Running the App:** Use `npm run dev` to run the app in development mode. The server will restart automatically if you make edits to the code.
- **Running Tests:** Use `npm test` to run the test suite and ensure that everything is working correctly.


## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user and return a JWT token

### Rooms

- `GET /api/rooms` - Get a list of available rooms
- `POST /api/rooms` - Add a new room (admin only)
- `GET /api/rooms/:id` - Get details of a specific room
- `PUT /api/rooms/:id` - Update room details (admin only)
- `DELETE /api/rooms/:id` - Delete a room (admin only)

### Hotels

- `GET /api/hotels` - Get a list of hotels
- `POST /api/hotels` - Add a new hotel (admin only)
- `GET /api/hotels/:id` - Get details of a specific hotel
- `PUT /api/hotels/:id` - Update hotel details (admin only)
- `DELETE /api/hotels/:id` - Delete a hotel (admin only)

### Reservations

- `GET /api/reservations` - Get a list of reservations (user-specific)
- `POST /api/reservations` - Create a new reservation
- `GET /api/reservations/:id` - Get details of a specific reservation
- `PUT /api/reservations/:id` - Update reservation details
- `DELETE /api/reservations/:id` - Cancel a reservation

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push the branch to your fork (`git push origin feature/your-feature`).
5. Create a pull request to the main repository.




https://github.com/user-attachments/assets/0488bc88-d766-469f-85fa-7dc1fc1563c6

