const { Url } = require("../models/Url");

const saveUrl = async (req, res) => {
  if (req.xurl) {
    let {original_url, short_url} = req.xurl;
    return res.json({
      short_url,
      original_url,
      hash: req.xurl.original_url
    });
  } else {
    const reqUrl = req.body.url;
    const url = new Url({ original_url: reqUrl });
    await url.save();
    const { short_url, original_url } = url;
    return res.json({ short_url, original_url, hash: short_url });
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
