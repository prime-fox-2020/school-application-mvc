const express = require('express')
const router = require('./routes')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended:true }))
app.set('view engine','ejs')
app.use('/',router)

app.listen(port, ()=>{ console.log(`app listening to port ${port}`)})