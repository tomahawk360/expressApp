var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataviewRouter = require('./routes/dataview');
var databehaviorRouter = require('./routes/databehavior');
var downloadRouter = require('./routes/download');

var app = express();

//connection to db
const username = "pasajero";
const password = "q1w2e3r4";
const url = `mongodb://${username}:${password}@ac-eud9deb-shard-00-00.rvjlwzm.mongodb.net:27017,ac-eud9deb-shard-00-01.rvjlwzm.mongodb.net:27017,ac-eud9deb-shard-00-02.rvjlwzm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ymfgu4-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Connected successfully to db");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/dataview", dataviewRouter);
app.use('/databehavior', databehaviorRouter);
app.use('/download', downloadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
