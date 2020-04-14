const db = require('../config/connection');

class TeacherModel{
    static read(cb){
        db.query('SELECT * from teachers', (err, res) => {
            if(err){
                cb(err, null);
            } else {
                let data = res.rows;
                cb(null, data);
            }
        })
    }

    static getId(id, cb){
        this.read((err, data) => {
            if(err){
                cb(err, null);
            } else {
                let check = false, result;

                data.forEach(el => {
                    if(id == el.id){
                        result = el;
                        check = true;
                    }
                });

                if(!check){
                    cb(null, 'Wrong Id!');
                } else {
                    cb(null, result);
                }
            }
        })
    }
}

module.exports = TeacherModel;