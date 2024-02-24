import express from "express";
import { clientMiddleware } from "../middlewares/client.middleware.js";
import {
  getClient,
  postClientParam,
} from "../controllers/client.controller.js";

const clientRouter = express.Router();

clientRouter.use(clientMiddleware);

clientRouter.get("/", getClient);
clientRouter.post("/:locale", postClientParam);

// clientRouter.get("/", (req, res) => {
//   res.send("/clientes");
// });
// clientRouter.post("/:locale", (req, res) => {
//   const { locale } = req.params;
//   res.send("/clientes/" + locale);
// });

// server.get("/clientes", () => {});
// server.get("/clientes/:locale", () => {});
export default clientRouter;
