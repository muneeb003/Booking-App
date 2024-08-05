import express from "express";
import {
  deleteUsers,
  updateUsers,
  getAllUsers,
  getUsersById,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("You are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You are logged in and you can delete account");
});

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send(" Admin you are logged in and you can delete account");
});
//update
router.put("/:id", verifyUser, updateUsers);
//delete
router.delete("/:id", verifyUser, deleteUsers);
//get
router.get("/:id", verifyUser, getUsersById);
//get all
router.get("/", verifyAdmin, getAllUsers);
export default router;
