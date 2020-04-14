const fs = require('fs');

const pool = require('../config/sql');

class StudentModel {
	static readFileJson(callback) {
		// fs.readFile('./students.json','utf8',(err,data) => {
		//     if (err){
		//         callback(err,null)
		//     } else {
		//         callback(null,JSON.parse(data))
		//     }
		// })
		const query = `SELECT * FROM students ORDER BY id`;

		pool.query(query, (err, data) => {
			if (err) callback(err, null);
			else callback(null, data.rows);
		});
	}

	static saveFileJson(data, callback) {
		fs.writeFile('./students.json', JSON.stringify(data, null, 2), (err) => {
			if (err) {
				callback(err);
			} else {
				callback(null);
			}
		});
	}

	static getStudentList(callback) {
		this.readFileJson((err, data) => {
			if (err) {
				callback(err, null);
			} else {
				callback(null, data);
			}
		});
	}

	static addStudentPost(newStudent, callback) {
		const first_name = newStudent.first_name;
		const last_name = newStudent.last_name;
		const email = newStudent.email;

		const query = `INSERT INTO students (first_name, last_name, email) VALUES($1, $2, $3)`;

		const params = [ first_name, last_name, email ];

		pool.query(query, params, (err) => {
			if (err) {
				callback(err, null);
			} else {
				callback(null, 'sukses menambahkan data student');
			}
		});
		// this.readFileJson((err,data)=>{
		//     if(err){
		//         callback(err,null)
		//     } else {
		//         data.push({
		//             id: data.length + 1,
		//             first_name: newStudent.first_name,
		//             last_name: newStudent.last_name,
		//             email: newStudent.email
		//         })

		//         this.saveFileJson(data, (err)=>{
		//             if(err){
		//                 callback(err,null)
		//             } else {
		//                 console.log(data)
		//                 callback(null, `Student baru berhasil ditambah`)
		//             }
		//         })
		//     }
		// })
	}

	static editStudentGet(id, callback) {
		const query = `SELECT * FROM students WHERE id = $1`;
		const params = [ id ];
		pool.query(query, params, (err, data) => {
			if (err) callback(err, null);
			else {
				callback(null, data.rows[0]);
			}
		});
		// this.readFileJson((err,data)=> {
		//     if (err){
		//         callback(err,null)
		//     } else {
		//         let studentData = {}
		//         data.forEach(item => {
		//             if(item.id == studentId){
		//                 studentData = item
		//             }
		//         })
		//         callback(null,studentData)
		//     }
		// })
	}

	static editStudentPost(id, student, callback) {
		const query = `
      UPDATE students
      SET
      first_name = $2,
      last_name = $3,
      email = $4
      
      WHERE id = $1`;

		const first_name = student.first_name;
		const last_name = student.last_name;
		const email = student.email;
		// const gender = student.gender;
		// const birthday = student.birthday;
		const params = [ id, first_name, last_name, email];
		console.log(params);
		pool.query(query, params, (err) => {
			if (err) {
				console.log('gggggggggggggg');
				callback(err, null);
			} else callback(null, 'sukses update students');
		});

		// this.readFileJson((err,data)=> {
		//     if(err){
		//         callback(err,null)
		//     } else {
		//         data.forEach(item => {
		//             if(item.id == updatedStudent.id){
		//                 item.first_name = updatedStudent.first_name,
		//                 item.last_name = updatedStudent.last_name,
		//                 item.email = updatedStudent.email
		//             }
		//         })

		//         this.saveFileJson(data, (err)=>{
		//             if(err){
		//                 callback(err,null)
		//             } else {
		//                 callback(null,`Student with id ${updatedStudent.id} has been edited`)
		//             }
		//         })
		//     }
		// })
	}

	static deleteStudentGet(id, callback) {
		const query = `DELETE FROM students WHERE id = $1`;

		const params = [ id ];

		pool.query(query, params, (err) => {
			if (err) callback(err, null);
			else callback(null, 'sukses delete');
		});

		// this.readFileJson((err,data)=> {
		//     if(err){
		//         callback(err,null)
		//     } else {
		//         let updatedStudent = []
		//         data.forEach(item => {
		//             if(item.id !== studentId){
		//                 updatedStudent.push(item)
		//             }
		//         })
		//         this.saveFileJson(updatedStudent, (err)=> {
		//             if(err){
		//                 callback(err)
		//             } else {
		//                 callback(null, `Student with id ${studentId} berhasil dihapus`)
		//             }
		//         })
		//     }
		// })
	}

	static emailStudentGet(email, callback) {
		const query = `SELECT * FROM students WHERE email = $1`;

		const params = [ email ];

		pool.query(query, params, (err, data) => {
			if (err) callback(err, null);
			else {
        console.log(data.rows[0])
        callback(null, [data.rows[0]]);}
		});
		// this.readFileJson((err,data)=> {
		//     if(err){
		//         callback(err)
		//     } else {
		//         let email = studentEmail
		//         let result = []
		//         data.forEach(item =>{
		//             if(item.email == email){
		//                 result.push(item)
		//             }
		//         })
		//         callback(null, result)
		//     }
		// })
	}
}

module.exports = StudentModel;
