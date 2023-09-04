const mongoose = require("mongoose");

let db;

const connectMongodb = (next) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/testNode")
    .then((result) => {
      console.log("Connected to the database");
      db = result.connection;
      next();
    })
    .catch((err) => {
      console.log("Error connecting to the database:", err);
    });
};

module.exports = { db, connectMongodb };

// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/testNode");
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//   }
// };

// module.exports = { connectToDatabase };

// using mysql*****
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "user",

// });

//**  using sequelize
// const Sequlize = require("sequelize");

// const sequelize = new Sequlize("user", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });
// module.exports = sequelize;
