const express = require('express');

const routes = require('./routes')

const app = express();




const port = 3000;



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.get('/', (req, res) => {
	res.send('hal0');
});



app.listen(port, () => {
	console.log('heyyyy');
});
