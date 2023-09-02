const express = require("express");
const router = express.Router();
const path = require("path");

const userControllers = require("../controllers/user");

router.get("/login", userControllers.getLogin);

router.post("/user", userControllers.postUser);
router.get("/", userControllers.getTitle);

router.get("/header", userControllers.getHeader);
router.get("/sakib", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "./views/create.ejs"));
});

router.get("/profile/:userName", userControllers.getProfile);

module.exports = router;
