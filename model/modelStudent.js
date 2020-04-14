const db=require('../db/config')

class ModelStudent{
    static getData(callback){
        db.query(`SELECT * FROM students ORDER BY id asc`,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,data.rows)
            }
        })
    }

    static filterGet(email,callback){
        const query=`SELECT * FROM students WHERE email = $1`
        const params=[email]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,data.rows)
            }
        })
    }

    static addPost(fname,lname,email,gender,birthdate,callback){
        const query=`INSERT INTO students (first_name,last_name,email,gender,birth_date) VALUES ($1,$2,$3,$4,$5)`
        const params=[fname,lname,email,gender,birthdate]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,`New student has added!!!`)
            }
        })
    }

    static editGet(id,callback){
        const query=`SELECT * FROM students WHERE id = $1`
        const params=[id]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,data.rows)
            }
        })
    }

    static editPost(id,fname,lname,email,gender,birthdate,callback){
        const query=`UPDATE students SET first_name = $2, last_name = $3,
        email = $4, gender = $5, birth_date = $6 WHERE id=$1`
        const params=[id,fname,lname,email,gender,birthdate]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,`ID ${id} has edited!!!`)
            }
        })
    }

    static deletePost(id,callback){
        const query=`DELETE FROM students WHERE id = $1`
        const params=[id]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,`Student with id ${id} has been deleted !`)
            }
        })
    }

    static search(email,callback){
        const query=`SELECT * FROM students WHERE email = $1`
        const params=[email]
        db.query(query,params,(err,data)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,data.rows)
            }
        })
    }
}

module.exports=ModelStudent