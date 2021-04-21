const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const regex = new RegExp(expression);
const dns = require("dns");

const validUrl = async (req, res, next) => {
  const { url } = req.body;
  let exists;
  exists = regex.test(url);
  if (!exists) {
    return res.status(400).json({ error: "invalid url" });
  }
  next();
};

const existingUrl = (req, res, next) => {
  const { url } = req.body;
  dns.lookup(url, (err) => {
    if (err) {
      return res.json({ error: "Invalid Hostname" });
    }
  });
};

module.exports = { validUrl, existingUrl };
