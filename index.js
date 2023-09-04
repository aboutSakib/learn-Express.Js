const express = require("express");
const app = express();
const connectdb = require("./database");
// const sequelize = require("./database");

app.use(express.urlencoded({ extended: false }));
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./routes/views");

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin.js");
app.use(express.static(path.join(__dirname, "./public")));
app.use(userRouter);
app.use("/admin", adminRouter);

app.use((req, res, next) => {
  return res.status(404).send(`<h1>404 page not found !!<h1/>`);
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

const mongodbDatabase = require("./database");
mongodbDatabase.connectMongodb(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
