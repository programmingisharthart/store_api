const errorHandlerMiddleware = async (err, res, req, next) => {
  console.log(err);
  return res.status(500).json({
    msg: "something went wrong, please try again",
  });
};

module.exports = errorHandlerMiddleware;
