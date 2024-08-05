import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotelById);
//get all
router.get("/", getAllHotel);

//Count
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
