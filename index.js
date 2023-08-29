const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin.js");
app.use(userRouter);
app.use("/admin", adminRouter);
app.use((req, res, next) => {
  return res.status(404).send(`<h1>404 page not found !!<h1/>`);
});

app.listen(3000);
