import express from "express"
import { add, editExistingItem, listInventory, patientBuysn } from "../controllers/inventoryController.js";
import { authMiddleWare,sendOTP,verifyotp } from "../middleware/auth.js";

const inventoryRouter = express.Router();

inventoryRouter.post("/add",authMiddleWare,add)
inventoryRouter.get("/listItems",authMiddleWare,listInventory)
inventoryRouter.post("/updateItems",authMiddleWare,patientBuys)
inventoryRouter.post("/editItems",authMiddleWare,editExistingItem)
inventoryRouter.post("/sendotp",authMiddleWare,sendOTP)
inventoryRouter.post("/verifyotp",authMiddleWare,verifyotp)



export {inventoryRouter}