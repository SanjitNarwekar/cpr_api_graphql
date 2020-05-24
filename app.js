const express = require('express');
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql');
const {buildSchema} = require('graphql');

/*WebStorm Defaults - kept as it is. Remove if not used*/
/*const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');*/
/*----------------------------------------------------*/


const app = express();

/*WebStorm Defaults - kept as it is. Remove if not used*/
/*app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);*/
/*----------------------------------------------------*/

app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHttp({
    schema:buildSchema(`
        type RootQuery {
            get_studentInfoHeader:[String!]!
        }
        
        type RootMutation {
            create_studentInfoHeader(studentCRMId: String): String
        }
    
    schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue:{
        get_studentInfoHeader: () => {
            return ['item1', 'item2', 'item3'];
        },
        create_studentInfoHeader: (args) => {
            const R_studentCRMId = args.studentCRMId;
            return R_studentCRMId;
        }
    },
    graphiql:true
    })
);

/*app.get('/',(req, res, next) => {
    res.send("Hello World!");
})*/

app.listen(3000);

/*WebStorm Defaults - kept as it is. Remove if not used*/
/*module.exports = app;*/
/*----------------------------------------------------*/