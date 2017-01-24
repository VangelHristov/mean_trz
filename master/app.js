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
    serverRoutes = require('./app_server/routes/index'),
    apiRoutes    = require('./app_api/routes/index'),
    app          = express();

// connect to users database
require('./app_api/models/db');

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'pug');

// middle wares
app.use(helmet());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', serverRoutes);
app.use('/api', apiRoutes);

module.exports = app;
