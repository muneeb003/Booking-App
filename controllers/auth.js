import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
//REGISTER
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User Created");
  } catch (err) {
    next(err);
  }
};
//LOGIN
export const login = async (req, res, next) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "user not found!"));
    }

    const isPassCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPassCorrect) {
      return next(createError(400, "Wrong Pass or user"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user._isAdmin },
      "pIWQ8mG7V7EJr1hsFNO5t+EYl4jHkYwv+1PUI1Plr9U="
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ detaile: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie("access_token");

    res.status(200).json({ message: "logout successful" });
  } catch (err) {
    next(err);
  }
};
