import express from "express";
import {
  googleSignIn,
  signin,
  signout,
  signup,
} from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", googleSignIn);

router.get("/signout", signout);

export default router;
