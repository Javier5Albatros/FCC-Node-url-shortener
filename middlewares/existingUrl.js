const { Url } = require("../models/Url");

const existingUrlByOriginal = async (req, res, next) => {
  const original_url = req.body.url;
  const url = await Url.findOne({ original_url });
  if (url) {
    req.xurl = url;
  }
  next();
};

const existingUrlByShort = async (req, res, next) => {
  const short_url = req.params.url;
  const url = await Url.findOne({ short_url });
  if (url) {
    req.xurl = url;
  }
  next();
};

module.exports = {
  existingUrlByOriginal,
  existingUrlByShort,
};
