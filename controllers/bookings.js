import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updateBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBooking);
  } catch (error) {
    next(err);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("Booking Deleted");
  } catch (error) {
    next(err);
  }
};

export const getBookingById = async (req, res, next) => {
  try {
    const Booking = await Booking.findById(req.params.id);
    res.status(200).json(Booking);
  } catch (err) {
    next(err);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const Bookings = await Booking.find();
    res.status(200).json(Bookings);
  } catch (err) {
    next(err);
  }
};
