const express = require("express");
const app = express();
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

app.listen(3000);
