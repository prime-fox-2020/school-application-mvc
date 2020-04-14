const express = require('express')
const router = require('./route')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/', router)

app.listen(port, () => {
    console.log(`App is listening on port ${3000}`)
})