const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const pug = require('pug');
const debug = require('debug')('app:startup'); // export DEBUG=app:startup,app:db or DEBUG=app:startup or DEBUG=app:*
// const dbDebugger = require('debug')('app:db');
const courseRouter = require('./routes/courses');
const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const logger = require('./middleware/logger');
const config = require('config');
// const dbQuery = require('./dbQuery');
const dbPagination = require('./dbPagination');
const dbUpdate = require('./dbUpdateRecord');
// const dbRemoved = require('./dbDelete');
const dbNewRecord = require('./dbNewRecord');
const { exist } = require('joi');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

if(app.get('env') === 'development') { // export ENV_NODE=production to test this block
    debug('Morgen enabled...');
    app.use(morgan('tiny'));
}

if(!config.get("jwtPrivateKey")) {
    console.log("FATAL ERROR: jwt key not found!"); // export jwtPrivateKey=xxx and unset jwtPrivateKey=xxx
    return process.exit(1);
}

// dbDebugger('DB connected...');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // built-in middleware func
app.use(express.static('public'));
app.use(helmet());
app.use('/', homeRouter);
app.use('/api/courses', courseRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use(logger); // custom middleware function

app.listen(port, () => console.log(`Listening to port ${port} ...`));
