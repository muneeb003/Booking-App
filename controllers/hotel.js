import { query } from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();

    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted");
  } catch (error) {
    next(err);
  }
};

export const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotel = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min | 1, $lte: max | 999 },
    }).limit(parseInt(req.query.limit));
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const citiesParam = req.query.cities;

  const cities = citiesParam ? citiesParam.split(",") : [];
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });
    const cottageCount = await Hotel.countDocuments({ type: "Cottage" });

    res.status(200).json([
      { type: "Hotel", count: hotelCount },
      { type: "Resort", count: resortCount },
      { type: "Apartment", count: apartmentCount },
      { type: "Villa", count: villaCount },
      { type: "Cabin", count: cabinCount },
      { type: "Cottage", count: cottageCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
