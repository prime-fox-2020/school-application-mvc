const fs = require('fs');
const pool = require('../config/sql');

class Model {
	static getSubjects(callback) {
		const query = `SELECT * FROM subjects ORDER BY id`;

		pool.query(query, (err, data) => {
			if (err) callback(err, null);
			else callback(null, data.rows);
		});
	}

	static getSubjectsId(subjectsId, callback) {
		// this.read((err,data)=>{
		//   if(err){
		//   callback(err,null)
		//   }else{
		//     let subjectsList = []
		//     data.forEach(item =>{
		//       if(item.id == subjectsId){
		//         subjectsList.push(item)
		//       }
		//     })
		//      callback(null, subjectsList)
		//   }
		// })
		const query = `SELECT * FROM subjects WHERE id = $1`;

		const params = [ subjectsId ];

		pool.query(query, params, (err, data) => {
			if (err) callback(err, null);
			else {
        
				callback(null, [data.rows[0]]);
			}
		});
	}
}

// Model.getTeacherId()
module.exports = Model;
