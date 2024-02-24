import userRouter from "./user.route.js";
import clientRouter from "./clients.route.js";
import productRouter from "./products.route.js";
import { loggerMiddleware } from "../middlewares/logger.middleware.js";
import express from "express";

const routes = express.Router();

const otroMiddleware = (req, res, next) => {
  console.log("Soy otro middleware de clientes");
  next();
};

routes.use([loggerMiddleware, otroMiddleware]); //middlewares

routes.use("/users", userRouter);
routes.use("/clientes", clientRouter);
routes.use("/products", productRouter);

export default routes;
