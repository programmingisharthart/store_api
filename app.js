const express = require("express");
const app = express();

require("dotenv").config();
const { PORT, MONGO_URI } = process.env;
const products = require("./routes/products");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");

app.use(express.json());
app.use("/api/v1/products", products);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, console.log(`listening to port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
