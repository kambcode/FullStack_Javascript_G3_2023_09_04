import express from "express";
import {
  getUsers,
  getProfile,
  getSettings,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/profile", getProfile);
userRouter.post("/settings", getSettings);

export default userRouter;
