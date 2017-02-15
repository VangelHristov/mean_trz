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

// connect to users database
require('./app_api/models/db');

// configure passport
require('./app_api/config/passport');

const
  apiRoutes    = require('./app_api/routes/index'),
  app          = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'pug');

// middle wares
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'app_client/ng-app')));
app.use(compression());
app.use(passport.initialize());

// routes
app.get('/', (req, res) => res.sendFile('./app_client/ng-app/index.html'));
app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
    if (!err) {
        return next();
    }
    if (process.env.NODE_ENV === 'development') {
        console.log(err);
    }
    res.status(400);
    res.render('static/error');
});

module.exports = app;
