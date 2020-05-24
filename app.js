const express = require('express');
const bodyParser = require('body-parser')

/*WebStorm Defaults - kept as it is. Remove if not used*/
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
/*----------------------------------------------------*/


const app = express();

/*WebStorm Defaults - kept as it is. Remove if not used*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
/*----------------------------------------------------*/

app.use(bodyParser.json());
app.get('/',(req, res, next) => {
    res.send("Hello World!");
})

app.listen(3000);

/*WebStorm Defaults - kept as it is. Remove if not used*/
module.exports = app;
/*----------------------------------------------------*/