import express from "express";
import { loginValidator } from "../Service/validator.js";
import { loginAccess } from "../Controller/creatToken.js";
import { getInventoryProduct } from "../Controller/getProducts.js";
import { validateToken } from "../Controller/validateToken.js";
import { getDescriptionItem } from "../Controller/getDescriptionItem.js";

export const userRoute = express.Router();

userRoute.get("/getProducts", validateToken, getInventoryProduct);
userRoute.get("/getOrders", validateToken, getDescriptionItem);
userRoute.post("/login", loginValidator, loginAccess);
