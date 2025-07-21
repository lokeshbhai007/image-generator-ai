import express from "express";
import { registerUser, loginUser } from "../controllers/UserController.js";

// in NEXT.js have file based routes but for the EXPRESS.js we have to set the api routes

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)


export default userRouter