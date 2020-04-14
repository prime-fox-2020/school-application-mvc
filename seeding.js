const pool = require('./config/sql');
const teachers = require('./teachers.json');
const students = require('./students.json')
const subjects = require('./subjects.json')
let query = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES`;

for (var i = 0; i < teachers.length; i++) {
	query += `('${teachers[i].first_name}', '${teachers[i].last_name}', '${teachers[i].email}', '${teachers[i].gender}')${i <
	teachers.length - 1
		? ', '
		: ''}`;
}

// pool.query(query, err =>{
//   if(err)throw err
//   console.log('berhasil seeding data ke teachers')

// })

 let Students  = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES`;

for(let i = 0; i < students.length; i++){
  Students += `('${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birth_date}')${i <
    students.length - 1
      ? ', '
      : ''}`;
}


// pool.query(Students, err =>{
//   if(err)throw err
//   console.log('berhasil seeding data ke students')
// pool.end()
// })


let Subjects = `INSERT INTO subjects (subject_name) VALUES`;

for(let i = 0; i < subjects.length; i++){
Subjects += `('${subjects[i].subject_name}')${i <
    subjects.length - 1
      ? ', '
      : ''}`;
}

// pool.query(Subjects,  err =>{
//   if(err)throw err
//   console.log('berhasil seeding ke subjects')
//   pool.end()
// })

