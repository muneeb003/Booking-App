import authRoute from "./routes/auth.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import bookingRoute from "./routes/booking.js";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mmuneebkhan2003:SlvMDjvlECOGgPLH@cluster0.9vafsja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
};

//
app.use(cookieParser());

app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/booking", bookingRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.errorstatus || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  connect();
  console.log("connected to backend!");
});
