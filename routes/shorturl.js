const express = require("express");
const { check } = require("express-validator");
const { getUrl, saveUrl } = require("../controllers/shorturl");
const { errorHandler } = require("../middlewares/errorHandler");
const {
  existingUrlByShort,
  existingUrlByOriginal,
} = require("../middlewares/existingUrl");
const { validUrl } = require("../middlewares/validUrl");

const router = express.Router();

router.post(
  "/shorturl",
  [validUrl, existingUrlByOriginal, errorHandler],
  saveUrl
);
router.get("/shorturl/:url", [existingUrlByShort], getUrl);

module.exports = {
  router,
};
