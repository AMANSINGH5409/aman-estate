import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found !"));

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Wrong Credential!"));

    const token = jwt.sign({ id: validUser._id }, process.env.APP_SECRET);

    const { password: pass, ...requiredInfo } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(requiredInfo);
  } catch (error) {
    next(error);
  }
};
