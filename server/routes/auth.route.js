import express from "express";
import { googleSignIn, signin, signup } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/google", googleSignIn);

export default router;
