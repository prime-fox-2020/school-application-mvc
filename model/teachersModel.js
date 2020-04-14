const fs = require('fs')
const pool = require('../config/sql');


class Model{
  static read(callback){
    fs.readFile('./teachers.json', 'utf8', (err,data)=>{
      if(err){
        callback(err, null)
      }else{
        callback(null,JSON.parse(data))
        // console.log(data)
      }
    })
  }

  static getTeachers(callback){
    const query = `SELECT * FROM teachers ORDER BY id`;

		pool.query(query, (err, data) => {
			if (err) callback(err, null);
			else callback(null, data.rows);
		});
  }

  static getTeacherId(teacherId, callback){
    const query = `SELECT * FROM teachers WHERE id = $1`;

		const params = [ teacherId ];

		pool.query(query, params, (err, data) => {
			if (err) callback(err, null);
			else {
        
				callback(null, [data.rows[0]]);
			}
		});
  }
}

// Model.getTeacherId()
module.exports = Model