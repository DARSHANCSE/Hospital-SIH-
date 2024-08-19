import express from "express"
import { doctorRegister,doctorLogin } from "../controllers/doctorController.js";


const doctorRouter = express.Router();

doctorRouter.post("/register",doctorRegister)
doctorRouter.post("/login", doctorLogin)

export {doctorRouter}