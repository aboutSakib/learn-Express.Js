const express = require("express");
const app = require("express")();
const session = require("express-session");

// const sequelize = require("./database");

app.use(express.urlencoded({ extended: false }));
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./routes/views");

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin.js");

app.use(express.static(path.join(__dirname, "./public")));
app.use(userRouter);
app.use(
  session({
    secret: "secret", // Change this to a secret key
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/admin", adminRouter);

app.use((req, res, next) => {
  return res.status(404).send(`<h1>404 page not found !!<h1/>`);
});

// using mongoose Schema
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/testNode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//create connect sequlize

// sequelize
//   .sync()
//   .then((result) => {
//     // console.log(result);
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
