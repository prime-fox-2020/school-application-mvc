const fs = require('fs');
const {Pool} = require('pg')
const pool = new Pool({ user: 'node', host: 'localhost', database: 'sapmvc', password: 'hacktiv8tugas', port: 5432 })

class Teachers {
    constructor(id, first_name, last_name, email, gender) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
    }
}

class Students {
    constructor(id, first_name, last_name, email, gender, birth_date) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
        this.birth_date = birth_date
    }
}

class Subjects {
    constructor(id, subject_name) {
        this.id = id
        this.subject_name = subject_name
    }
}

class Backend {

    static executeQuery = query => new Promise((resolve, reject) => {

        pool.connect()
            .then(client => {
                return client.query(query)
                    .then(result => {
                        client.release();
                        resolve(result.rows)
                    })
                    .catch(err => {
                        client.release();
                        reject(err)
                    })
            })

    })

    static show = (tableSelection) => new Promise((resolve, reject) => {
        let SQL = `SELECT * FROM ${tableSelection} ORDER BY id ASC;`;
        this.executeQuery(SQL)
            .then(result => resolve(result))
            .catch(err => reject(err))
    })

    static findById = (tableSelection, id) => new Promise((resolve, reject) => {

        let SQL = `SELECT * FROM ${tableSelection} WHERE id = ${Number(id)};`
        this.executeQuery(SQL)
            .then(result => resolve(result))
            .catch(err => reject(err))

    })

    static newData = (tableSelection, content) => {

        /* 
        * Add new data goes here
        */

        const column = () => {
            switch (tableSelection) {
                case 'teachers' : ['first_name', 'last_name', 'email', 'gender'].toString(); break;
                case 'students' : ['first_name', 'last_name', 'email', 'gender', 'birth_date'].toString(); break;
                case 'subject' : 'subject_name'; break;
            }
        }

        const expandValue = () => {
            let value;
            for (let i = 1; i <= Object.values(content).length; i++) {
                value += `$${i}, `
            }

            return value.trim().replace(/,$/g, '');
        }

        let SQL = {
            text: `INSERT INTO ${tableSelection} (${column()}) VALUES (${expandValue()})`,
            values : Object.values(content),
        }

        this.executeQuery(SQL)
            .then(() => `/${tableSelection}`)
            .catch(err => err)
    }

    static delete = (tableSelection, id) => new Promise((resolve, reject) => {

        let SQL = `DELETE FROM ${tableSelection} WHERE id = ${Number(id)}`;
        this.executeQuery(SQL)
            .then(() => resolve(`/${tableSelection}?action=delete&id=${id}&succeeded=true`))
            .catch(err => reject(err))

    })

    static update = (tableSelection, content) => new Promise((resolve, reject) => {

        const columnToUpdate = () => {
            let cache;
            Object.keys(content).forEach(el => {
                if (content.hasOwnProperty(el)) {
                    cache += `${el} = '${content[el]}', `
                }
            })

            return cache.trim().replace(/,$/g, '');
        }

        let SQL = `UPDATE ${tableSelection} SET ( ${columnToUpdate()} ) WHERE id = ${content.id};`;
        this.executeQuery(SQL)
            .then(() => resolve(`/${tableSelection}?action=update&id=${content.id}&succeeded=true`))
            .catch(err => reject(err))

    })
}

module.exports = Backend