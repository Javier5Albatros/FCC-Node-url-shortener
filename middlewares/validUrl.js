const urlRegex = require("urlregex");

const expression =
  "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";

const regex = new RegExp(expression);

const validUrl = (req, res, next) => {
  if (!req.body.url.match(regex)) {
    return res.status(400).json({ error: "invalid url" });
  }
  next();
};

module.exports = { validUrl };
