export const clientMiddleware = (req, res, next) => {
  console.log("Soy un middleware de clientes");
  next();
};
