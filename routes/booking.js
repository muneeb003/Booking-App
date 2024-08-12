import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingById,
  getBookings,
} from "../controllers/bookings.js";
const router = express.Router();

//create
router.post("/", verifyUser, createBooking);
//update;
router.put("/:id", verifyUser, updateBooking);
//delete
router.delete("/:id", verifyUser, deleteBooking);
//get
router.get("/:id", verifyUser, getBookingById);
//get all
router.get("/", getBookings);
export default router;
