const path = require("path");
const User = require("../Modules/user");

exports.getLogin = (req, res, next) => {
  return res.render("login", {
    allUser: [],
  });
  // User.findAll()
  //   .then((result) => {
  //     return res.render("login", {
  //       allUser: result,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // return res.sendFile(path.join(__dirname, "./views/login.html"));
  // User.getAllUser()
  //   .then(([data, obj]) => {
  //     return res.render("login", {
  //       allUser: data,
  //       // name: "sakib",
  //       // arr: ["s", "a", "k", "i", "b"],
  //       // sakib: 0,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // let admin = req.query.admin;
  // let price = req.query.price;
  // console.log(admin, price);
};

exports.getTitle = (req, res, next) => {
  return res.sendFile(path.join(__dirname, "../routes/views/title.html"));
};
exports.getHeader = (req, res, next) => {
  return res.render("header");
};
exports.getCreate = (req, res, next) => {
  return res.render("create", {});
};

exports.postUser = (req, res, next) => {
  //useng mongodb
  let user = new User(req.body.userName);
  user.save();

  // User.create({
  //   name: req.body.userName,
  // })
  //   .then((result) => {
  //     return res.redirect("/login");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //   .save()
  //   .then(() => {
  //     return res.redirect("/login");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

exports.getProfile = (req, res, next) => {
  let user = req.params.userName;
  console.log(user);
};
