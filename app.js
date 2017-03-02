'use strict';

const
  express      = require('express'),
  path         = require('path'),
  favicon      = require('serve-favicon'),
  logger       = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser   = require('body-parser'),
  compression  = require('compression'),
  helmet       = require('helmet'),
  passport     = require('passport');

// connect to database
require('./app_api/models/db');

// configure passport
require('./app_api/config/passport');

const
  apiRoutes    = require('./app_api/routes/index'),
  app          = express();

// middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'app_client/images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(compression());
app.use(passport.initialize());

// routes
app.get('/', (req, res) => res.sendFile('./app_client/index.html'));
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
//noinspection JSHint
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.end('Unhandled error.');
});

module.exports = app;
