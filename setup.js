const pool = require('./config/connection');

//create table teachers
pool.query(`
    CREATE TABLE teachers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(25) NOT NULL,
        last_name VARCHAR(25),
        email VARCHAR(50),
        gender VARCHAR(10) NOT NULL
    );
` , (err) => {
    if (err) throw err;
    console.log('create table teachers success');
});

//create table students
pool.query(`
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(25) NOT NULL,
        last_name VARCHAR(25),
        email VARCHAR(50),
        gender VARCHAR(10) NOT NULL,
        birth_date VARCHAR(20)
    );
` , (err) => {
    if (err) throw err;
    console.log('create table students success');
});

//create table students
pool.query(`
    CREATE TABLE subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(25) NOT NULL
    );
` , (err) => {
    if (err) throw err;
    console.log('create table subjects success');
    pool.end();
});