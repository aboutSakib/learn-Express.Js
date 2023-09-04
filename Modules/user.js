// using mongodb
const db = require("../database").db;

class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    db.collection("user")
      .insertOne(this)
      .then((result) => {
        console.log("Data saved properly"); // Corrected message
      })
      .catch((err) => {
        console.error(err); // Using console.error for error messages
      });
  }
}

module.exports = User;

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
