const { Url } = require("../models/Url");

const saveUrl = async (req, res) => {
  if (req.xurl) {
    let { short_url, original_url } = req.xurl;
    return res.json({
      short_url,
      original_url,
    });
  } else {
    const reqUrl = req.body.url;
    const url = new Url({ original_url: reqUrl });
    await url.save();
    const { short_url, original_url } = url;
    return res.json({ original_url, short_url});
  }
};

const getUrl = (req, res) => {
  const url = req.xurl;
  console.log(url);
  if (url) {
    res.redirect(url.original_url);
  } else {
    return res.json({ error: "Wrong format" });
  }
};

module.exports = { getUrl, saveUrl };
