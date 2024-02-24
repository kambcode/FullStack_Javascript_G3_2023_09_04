export const loggerMiddleware = (req, res, next) => {
  console.log(`Request method: `, req.method);

  next();
};
