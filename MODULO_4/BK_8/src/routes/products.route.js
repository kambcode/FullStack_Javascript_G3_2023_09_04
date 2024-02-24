import express from "express";
import { getProduct, postCategory } from "../controllers/product.controller.js";

//request - response

const productRouter = express.Router();

productRouter.get("/", getProduct);

productRouter.post("/category", postCategory);

// productRouter.

export default productRouter;
