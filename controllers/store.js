const getAllProducts = (req, res) => {
  res.send("this is for getting all products");
};
const getAllProductsStatic = (req, res) => {
  res.send("this is for getting all products static");
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
