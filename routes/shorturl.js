const express = require("express");
const { check } = require("express-validator");
const { getUrl, saveUrl } = require("../controllers/shorturl");
const { errorHandler } = require("../middlewares/errorHandler");
const { validUrl, existingUrl } = require("../middlewares/validUrl");
const {
  existingUrlByShort,
  existingUrlByOriginal,
} = require("../middlewares/existingUrl");

const router = express.Router();

router.post(
  "/shorturl",
  [
    check("url").notEmpty(),
    validUrl,
    existingUrl,
    existingUrlByOriginal,
    errorHandler,
  ],
  saveUrl
);
router.get("/shorturl/:url", [existingUrlByShort], getUrl);

module.exports = {
  router,
};
