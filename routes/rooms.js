import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getAllRoom,
  getRoomById,
  updateRoomAvailability,
} from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoomById);
//get all
router.get("/", getAllRoom);
export default router;
