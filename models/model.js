const pool = require('../connection')

class model{
    static readTeacher(callback){
        pool.query(`SELECT * FROM teachers
            ORDER BY id ASC
        `,(err, data)=>{
            if(err) console.log(err)

            console.table(data.rows)
            callback(null, data.rows)
        })
        // let teacher = JSON.parse(fs.readFileSync('./teacher.json', 'utf8'))
    }

    static readStudent(callback){
        pool.query(`SELECT * FROM students
            ORDER BY id ASC
        `,(err, data)=>{
            if(err) console.log(err)

            console.table(data.rows)
            callback(null, data.rows)
        })
    }

    static readSubject(callback){
        pool.query(`SELECT * FROM subjects
            ORDER BY id ASC
        `,(err, data)=>{
            if(err) console.log(err)

            console.table(data.rows)
            callback(null, data.rows)
        })
    }

    static addStudent(fname, lname, email, gender, birthDate, callback){
        pool.query(`INSERT INTO students (first_name, last_name, email, gender, birthdate)
        VALUES ('${fname}', '${lname}', '${email}', '${gender}', '${birthDate}')`,(err, data)=>{
            if(err) console.log(err)

            callback(null, 'successfully adding new student')
        })
    }

    static deleteStudent(id, callback){
        pool.query(`DELETE FROM students
            WHERE id = ${id}
        `, (err)=>{
            if(err) console.log(err)

            callback(null, 'success')
        })
    }

    static editStudent(id, fname, lname, email, gender, birthDate, callback){
        model.deleteStudent(id, (err, res)=>{
            if(err) console.log(err)

            console.log(res)
            pool.query(`INSERT INTO students (id, first_name, last_name, email, gender, birthdate)
            VALUES (${id}, '${fname}', '${lname}', '${email}', '${gender}', '${birthDate}')`,(err)=>{
                if(err) console.log(err)
    
                callback(null, `successfully editing student with id ${id}`)
            })
        })
    }
}

module.exports = model