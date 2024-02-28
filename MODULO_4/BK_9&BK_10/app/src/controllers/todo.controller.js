import TodoService from "../services/todo.service.js";

const todoService = new TodoService();

export const createTodoController = async (req, res) => {
  const createTodoResult = await todoService.createTodo(req);
  res.status(createTodoResult.statusCode).json(createTodoResult);
};

export const getAllTodosController = async (req, res) => {
  const getAllTodosResult = await todoService.getAllTodos(req);
  res.status(getAllTodosResult.statusCode).json(getAllTodosResult);
};
