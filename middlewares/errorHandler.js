const { validationResult } = require("express-validator");

const errorHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: "invalid url" });
  }
  return next();
};

//2VHlfHSWd

module.exports = {
  errorHandler,
};
