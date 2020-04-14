const modelStudent=require('../model/modelStudent')

class StudentController{
    static getData(req,res){
        modelStudent.getData((err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('student',{data, alert : req.query })
            }
        })
    }

    static filterGet(req,res){
        modelStudent.filterGet(req.params.email,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('student',{data,alert:''})
            }
        })
    }

    static addGet(req,res){
        res.render('add')
    }

    static addPost(req,res){
        modelStudent.addPost(req.body.fname,req.body.lname,req.body.email,req.body.gender,req.body.birthdate,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                // res.render('add')
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }
    static editGet(req,res){
        modelStudent.editGet(req.params.id,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('edit',{data})
            }
        })
    }

    static editPost(req,res){
        modelStudent.editPost(req.params.id,req.body.fname,req.body.lname,req.body.email,req.body.gender,req.body.birthdate,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }

    static deletePost(req,res){
        modelStudent.deletePost(req.params.id,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.redirect(`/students?message=${data}&type=danger`)
            }
        })
    }

    static postData(req,res){
        modelStudent.search(req.body.Semail,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('student',{data,alert:''})
            }
        })
    }
}

module.exports=StudentController