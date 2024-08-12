import { request } from "express";
import mongoose from "mongoose";
const { Schema } = "mongoose";

const BookingSchema = mongoose.Schema(
  {
    userInfo: {
      username: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      password: { type: String, required: true },
      request: { type: String, required: false },
    },
    data: {
      _id: mongoose.Schema.Types.ObjectId,
      name: { type: String, required: true },
      type: { type: String, required: true },
      city: { type: String, required: true },
      address: { type: String, required: true },
      distance: { type: String, required: true },
      images: { type: [String], required: true },
      description: { type: String, required: true },
      title: { type: String, required: true },
      rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
      cheapestPrice: { type: Number, required: true },
      features: { type: Boolean, required: true },
      __v: { type: Number, select: false },
    },
    selectedRooms: { type: String },
  },
  { timestamps: true }
);
export default mongoose.model("Booking", BookingSchema);
