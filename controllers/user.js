import Users from "../models/Users.js";

export const updateUsers = async (req, res, next) => {
  try {
    const updateUsers = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUsers);
  } catch (error) {
    next(err);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Users Deleted");
  } catch (error) {
    next(err);
  }
};

export const getUsersById = async (req, res, next) => {
  try {
    const Users = await Users.findById(req.params.id);
    res.status(200).json(Users);
  } catch (error) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const Userss = await Users.find();
    res.status(200).json(Userss);
  } catch (err) {
    next(err);
  }
};
