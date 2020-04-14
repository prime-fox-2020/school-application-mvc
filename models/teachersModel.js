const fs = require('fs');

class TeachersModel {
  static getData(callback) {
    this.open((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }

  static open(callback) {
    fs.readFile('./teachers.json', 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, JSON.parse(data));
      }
    })
  }

  static save(data, callback) {
    fs.writeFile('./teachers.json', JSON.stringify(data, null, 2), ()=>callback())
  }
}

module.exports = TeachersModel;