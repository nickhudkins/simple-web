require('babel/register')({
	'stage': 0
});

var makeServer = require('server/entry');

var config = process.env.NODE_ENV === 'development' ? require('./webpack.config.dev') : null;

makeServer(process.env.NODE_ENV, config);
