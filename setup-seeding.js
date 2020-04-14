// FROM JSON TO DATABASE
const client = require('./db/config');
const DataInit = require('./db/databaseInit');
const filePath = ['./datas/students.json', './datas/teachers.json', './datas/subjects.json'];
DataInit.convertToDB(filePath, client);