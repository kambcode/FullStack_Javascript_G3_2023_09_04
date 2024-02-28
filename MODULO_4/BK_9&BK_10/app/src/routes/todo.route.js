import express from "express";
import {
  createTodoController,
  getAllTodosController,
} from "../controllers/todo.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const todoRouter = express.Router();

todoRouter.use(verifyToken);

todoRouter.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

todoRouter.get("/getAllTodos", getAllTodosController);

todoRouter.post("/createTodo", createTodoController);

export default todoRouter;
