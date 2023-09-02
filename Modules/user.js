let arr = [];
module.exports = class User {
  constructor(name) {
    this.name = name;
  }
  save() {
    arr.push(this);
  }
  static getAllUser() {
    return arr;
  }
};
