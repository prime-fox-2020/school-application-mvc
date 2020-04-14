const fs = require('fs');

class SubjectsModel {
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
    fs.readFile('./subjects.json', 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, JSON.parse(data));
      }
    })
  }

  static save(data, callback) {
    fs.writeFile('./subjects.json', JSON.stringify(data, null, 2), ()=>callback())
  }
}

module.exports = SubjectsModel;