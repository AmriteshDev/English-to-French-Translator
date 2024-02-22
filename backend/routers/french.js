const express = require("express");
const { englishToFrench } = require("../translator/tofrenchTranslator");


const router = express.Router();

router.route("/translator").post(englishToFrench);

module.exports = router;