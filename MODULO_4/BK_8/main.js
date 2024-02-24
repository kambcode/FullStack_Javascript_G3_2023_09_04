import express from "express";
import routes from "./src/routes/index.js";

const server = express();
const port = 8000;

server.use(express.json());
server.use("/", routes);

//Router
// server.get("/user", () => {});
// server.get("/user/profile", () => {});
// server.get("/clientes", () => {});
// server.get("/clientes/:locale", () => {});
// server.get("/productos", () => {});
// server.get("/productos/categoria", () => {});
// server.get("/productos/categoria/sala", () => {});
// server.get("/productos/categoria/cocina", () => {});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
