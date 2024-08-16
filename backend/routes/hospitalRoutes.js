import express from "express"
import { hospitalLogin, hospitalRegister,hospitaldetails } from "../controllers/hospitalController.js";
import { authMiddleWare } from "../middleware/auth.js";


const hospitalRouter = express.Router();
hospitalRouter.post("/register",hospitalRegister)
hospitalRouter.post("/login",hospitalLogin)
hospitalRouter.get('/details',hospitaldetails)


export {hospitalRouter}