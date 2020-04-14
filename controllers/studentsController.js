const fs = require('fs')

class studentController {

    static getTableStudent(req, res) {
        const students_list = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
        // res.send(student_list)
        res.render('./students', { students_list })
    }

    static addGet(req, res) {
        res.render('./addStudent')
    }

    static addPost(req, res) {
        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const email = req.body.email
        const gender = req.body.gender
        const birth_date = req.body.birth_date

        //read
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let students_list = JSON.parse(data)
                let temp = {
                    "id": Number(students_list[students_list.length - 1].id + 1),
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "gender": gender,
                    "birth_date": birth_date
                }
                students_list.push(temp)
                fs.writeFileSync(`./students.json`, JSON.stringify(students_list, null, 2), 'utf8')
                // const alert = `Student with id : ${temp} added`
                res.redirect(`students`)
            }
        })
    }

    static editStudentGet(req, res) {
        //read
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let students_list = JSON.parse(data)
                let length = students_list.length
                for (let i = 0; i < length + 1; i++) {
                    if (req.params.id == students_list[i].id) {
                        let dataById = students_list[req.params.id - 1]
                        res.render('editStudent', { dataById })
                        break
                    }
                }
            }
        })
    }

    static editStudentPost(req, res) {
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let students_list = JSON.parse(data)
    
                const id = req.params.id
                const first_name = req.body.first_name
                const last_name = req.body.last_name
                const email = req.body.email
                const gender = req.body.gender
                const birth_date = req.body.birth_date
    
                let temp = {
                    "id": Number(req.params.id),
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "gender": gender,
                    "birth_date": birth_date
                }
    
                students_list[req.params.id - 1] = temp
                fs.writeFileSync(`./students.json`, JSON.stringify(students_list, null, 2), 'utf8')
                res.redirect('../')
            }
        })
    }
    static deleteStudentPost(req, res) {
        fs.readFile('./students.json', 'utf8', (err, data) => {
            if (err) {
                res.send(err)
            } else {
                let students_list = JSON.parse(data)
                let length = students_list.length
                let afterDelete = []
                for (let i = 0; i < length; i++) {
                    if (req.params.id != students_list[i].id) {
                        afterDelete.push(students_list[i])
                    }
                }
                students_list = afterDelete
                fs.writeFileSync(`./students.json`, JSON.stringify(students_list, null, 2), 'utf8')
                res.redirect('../')
            }
        })
    }
}

module.exports = studentController