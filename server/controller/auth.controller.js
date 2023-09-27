import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ username, email, password: hashPassword });

    await newUser.save();

    res.status(201).json({ msg: "User Created Successfully !" });
  } catch (error) {
    next(error);
  }
};
