'use strict';

const
	express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	helmet = require('helmet');

// connect to database
require('./app_api/models/db');

const apiRoutes = require('./app_api/routes/index');

const app = express();

app.use(helmet({hidePoweredBy: true}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, 'app_client/images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(compression());

// routes
app.get('/', (req, res) => res.sendFile('./app_client/index.html'));
app.use('/api', apiRoutes);

app.use(function catch404(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function errorHandler(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.end('Unhandled error.');
});

module.exports = app;
