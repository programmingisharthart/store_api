require("dotenv").config();

const connectDB = require("./db/connect");

const Product = require("./models/Product");

const JsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(JsonProducts);
    console.log("sc");
  } catch (error) {
    console.log(error);
  }
};
start();
