// const Sequelize = require("sequelize");
// const sequelize = require("../database");

// const Student = sequelize.define("student", {
//   id: {
//     type: Sequelize.INTEGER, // Change "typeof" to "type"
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING, // Change "typeof" to "type"
//   },
// });

// module.exports = Student;

// const db = require("../database");
// module.exports = class User {
//   constructor(name) {
//     this.name = name;
//   }

//   //data create
//   save() {
//     return db.execute("INSERT INTO `student`( `name`) VALUES (?)", [this.name]);
//   }
//   //data fatch
//   static getAllUser() {
//     return db.execute("SELECT * FROM `student` WHERE 1");
//   }
// };
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
