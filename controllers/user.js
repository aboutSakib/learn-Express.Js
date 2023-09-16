const path = require("path");
const User = require("../Modules/user");

exports.getLogin = (req, res, next) => {
  let login = req.session.home;
  console.log(login);
  //USING MONGODB**

  // DATA CREATE
  // return res.render("login", {
  //   allUser: data,
  // });

  // DATA FATCH
  User.find()
    .then((data) => {
      return res.render("login", {
        Loggedin: login,
        allUser: data,
      });
    })
    .catch((err) => {
      console.log(err);
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
  return res.render("create");
};

exports.postUser = (req, res, next) => {
  //USING MONGO
  //CODE IMPORT FROM SEQULIZE
  let user = new User({
    name: req.body.userName,
    age: req.body.age,
  });
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
  // DATA UPDATE
  let _id = req.params.id;
  User.findById(_id)
    .then((data) => {
      return res.render("showUser", {
        user: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postProfile = (req, res, next) => {
  // DATA UPDATE
  let _id = req.params.id;

  User.findById(_id)
    .then((data) => {
      data.name = req.body.userName;
      data.age = req.body.age;
      data.save();
      return res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  let _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then(() => {
      return res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getHome = (req, res, next) => {
  return res.render("home");
};
exports.postHome = (req, res, next) => {
  req.session.home = true;
  return res.redirect("/login");
};
