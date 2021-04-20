const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

const regex = new RegExp(expression);
const dns = require("dns");

const validUrl = async (req, res, next) => {
  const { url } = req.body;
  let exists;
  dns.lookup(url, (err) => {
    if (err) exists = false;
  });
  if (!exists) {
    return res.status(400).json({ error: "invalid url" });
  }
  next();
};

module.exports = { validUrl };
