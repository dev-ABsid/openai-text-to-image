const express = require("express");
const generateImage = require("../controllers/openaiController");

const router = express.Router();

router.post("/generateimage", generateImage);

//curl request to get above endpoint post request
// curl -X POST -d '{"prompt":"A picture of a dog"}' http://localhost:5000/generateimage
// curl -X POST http://localhost:5000/generateimage

module.exports = router;
