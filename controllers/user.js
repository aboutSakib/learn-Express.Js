const path = require("path");
const User = require("../Modules/user");
exports.getLogin = (req, res, next) => {
  // return res.sendFile(path.join(__dirname, "./views/login.html"));
  let allUser = User.getAllUser();
  let admin = req.query.admin;
  let price = req.query.price;
  console.log(admin, price);
  return res.render("login", {
    allUser: allUser,
    // name: "sakib",
    // arr: ["s", "a", "k", "i", "b"],
    // sakib: 0,
  });
};

exports.getTitle = (req, res, next) => {
  return res.sendFile(path.join(__dirname, "../routes/views/title.html"));
};
exports.getHeader = (req, res, next) => {
  return res.render("header");
};

exports.postUser = (req, res, next) => {
  let user = new User(req.body.userName);
  user.save();
  return res.redirect("/login");
};

exports.getProfile = (req, res, next) => {
  let user = req.params.userName;
  console.log(user);
};
