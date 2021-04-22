const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const regex = new RegExp(expression);
const dns = require("dns");
const validUrlP = require("valid-url");

const validUrl = async (req, res, next) => {
  const { url } = req.body;
  if (!validUrlP.isWebUri(url)) {
    return res.json({ error: "invalid url" });
  }
  next();
};

const existingUrl = (req, res, next) => {
  const { url } = req.body;
  dns.lookup(url, (err) => {
    if (err) {
      return res.json({ error: "Invalid Hostname" });
    } else {
      next();
  });
};

module.exports = { validUrl, existingUrl };
