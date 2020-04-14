const express = require('express');
const app = express();

const route = require('./routes');
const port = 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use('/', route)

app.listen(port, ()=>{
    console.log("This app is running at port : ",port)
})