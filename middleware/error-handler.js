const { customAPIError, CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Sorry unable to process your request, try again!!" });
};

module.exports = errorHandlerMiddleware;
