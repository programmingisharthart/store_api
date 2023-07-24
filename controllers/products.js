const Product = require("./../models/Product");

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = {
      $regex: name,
      $options: "i",
    };
  }

  // console.log(queryObject);
  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
    // console.log(sort);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const product = await result;
  res.status(200).json({
    product,
    page,
    limit,
  });
};
const getAllProductsStatic = async (req, res) => {
  const product = await Product.find({}).select("name price");
  res.status(200).json({
    product,
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
