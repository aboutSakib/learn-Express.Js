const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "./views/login.html"));
});
router.post("/user", (req, res, next) => {
  console.log(req.body);
});
router.get("/", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "./views/title.html"));
});

module.exports = router;
