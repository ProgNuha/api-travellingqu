const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const express = require(`express`);
const hostname = '127.0.0.1';
const port = 3000;
const app = express() // setup express application
const cors = require('cors');

app.use(cors());
app.use(logger('dev')); // log requests to the console
app.use('./uploads', express.static('uploads'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', routes);
routes(app);

app.get('*', (req, res) => 
    res.status(200).send({
        message: 'Welcome to the default API route',
    })
);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//test