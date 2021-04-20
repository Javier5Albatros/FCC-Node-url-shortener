const { Url } = require("../models/Url");

const saveUrl = async (req, res) => {
  if (req.xurl) {
    return res.json(req.xurl);
  } else {
    const original_url = req.body.url;
    const url = new Url({ original_url });
    url
      .save()
      .then((data) => {
        return res.json(url);
      })
      .catch((err) => console.log(err));
  }
};

const getUrl = (req, res) => {
  const url = req.xurl;
  if (url) {
    return res.status(300).redirect(url.original_url);
  } else {
    return res.json({ msg: "Url not found" });
  }
};

module.exports = { getUrl, saveUrl };
