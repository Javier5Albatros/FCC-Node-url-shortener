const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

const regex = new RegExp(expression);

const validUrl = async (req, res, next) => {
  const { url } = req.body;
  if (!regex.test(url)) {
    return res.status(400).json({ error: "invalid url" });
  }
  next();
};

module.exports = { validUrl };
