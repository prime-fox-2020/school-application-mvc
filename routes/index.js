const { Router } = require('express')
const route = Router()

route.use('/',(req,res)=>{
    res.render('index.ejs')
})



module.exports = route