if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
    // console.log(process.env)
}

const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.urlencoded({extended:false}));

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const dbRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', dbRouter);

app.set('view engine', 'pug');
app.set('views', __dirname + '/public');
app.use('static', express.static(__dirname + '/static'));
app.use(session({
    secret:process.env.SECRET,
    resave: false, 
    saveUninitialized:true
}));


app.listen(process.env.PORT);