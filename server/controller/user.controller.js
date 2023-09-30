import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import brcypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id)
    return next(errorHandler(401, "You can update only your own account!"));

  try {
    if (req.body.password) {
      req.body.password = await brcypt.hash(req.body.password, 12);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password: pass, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    return next(errorHandler(401, "You can only delete your own account!"));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "User has been deleted!" })
      .clearCookie("access_token");
  } catch (error) {
    next(error);
  }
};
