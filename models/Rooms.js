import mongoose from "mongoose";

const RoomSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    roomNumber: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { Timestamp: true }
);

export default mongoose.model("HotelRooms", RoomSchema);
