const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user");

router.get("/login", userControllers.getLogin);

router.post("/user", userControllers.postUser);
router.get("/", userControllers.getTitle);

router.get("/header", userControllers.getHeader);
router.get("/create", userControllers.getCreate);

router.get("/profile/:id", userControllers.getProfile);
router.post("/profile/:id", userControllers.postProfile);
router.get("/delete/:id", userControllers.deleteUser);
router
  .route("/home")
  .get(userControllers.getHome)
  .post(userControllers.postHome);

module.exports = router;
