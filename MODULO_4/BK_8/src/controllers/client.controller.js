export const getClient = (req, res) => {
  res.send("/clientes");
};

export const postClientParam = (req, res) => {
  const { locale } = req.params;
  res.send("/clientes/" + locale);
};
