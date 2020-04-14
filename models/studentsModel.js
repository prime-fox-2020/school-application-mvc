const fs = require('fs');

class StudentsModel {
  static getData(callback) {
    this.open((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }

  static addDataGet(callback) {
    this.open((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }

  static addDataPost(req, callback) {
    this.open((err, data) => {
      if (err) {
        callback(err);
      } else {
        req.body.id = data[data.length-1].id+1;
        data.push(req.body)
        this.save(data, () => {
          callback();
        })
      }
    })
  }

  static editDataGet(callback) {
    this.open((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }

  static editDataPost(req, callback) {
    this.open((err, data) => {
      if (err) {
        callback(err);
      } else {
        const id = req.params.id;
        req.body.id = id;
        const updatedData = data.map(dat => {
          if (dat.id == id) {
            return req.body;
          } else {
            return dat;
          }
        })
        
        this.save(updatedData, () => callback());
      }
    })
  }

  static deleteData(req, callback) {
    this.open((err, data) => {
      if (err) {
        callback(err);
      } else {
        const id = req.params.id;
        const updatedData = data.filter(dat => dat.id != id);
        this.save(updatedData, () => callback());
      }
    })
  }

  static open(callback) {
    fs.readFile('./students.json', 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, JSON.parse(data));
      }
    })
  }

  static save(data, callback) {
    fs.writeFile('./students.json', JSON.stringify(data, null, 2), ()=>callback())
  }
}

module.exports = StudentsModel;