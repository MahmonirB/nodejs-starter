const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const pug = require('pug');
const debug = require('debug')('app:startup'); // export DEBUG=app:startup,app:db or DEBUG=app:startup or DEBUG=app:*
// const dbDebugger = require('debug')('app:db');
const courseRouter = require('./routes/courses');
const homeRouter = require('./routes/home');
const logger = require('./middleware/logger');
const validate = require('./validate');
const config = require('config');
// const dbQuery = require('./dbQuery');
const dbPagination = require('./dbPagination');
const dbUpdate = require('./dbUpdateRecord');
// const dbRemoved = require('./dbDelete');
const dbNewRecord = require('./dbNewRecord');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

if(app.get('env') === 'development') { // export ENV_NODE=production to test this block
    debug('Morgen enabled...');
    app.use(morgan('tiny'));
}

// dbDebugger('DB connected...');
app.use('/', homeRouter);
app.use('/api/courses', courseRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // built-in middleware func
app.use(express.static('public'));
app.use(helmet());

app.use(logger); // custom middleware function

// dbQuery();
// dbPagination();
// dbUpdate('63adba897f41e7232340ca00');
// dbRemoved('63adba897f41e7232340ca00');
dbNewRecord();

app.listen(port, () => console.log(`Listening to port ${port} ...`));
