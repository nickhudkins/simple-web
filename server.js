require('babel/register')({
	stage: 0,
});

var devConfig = require('./webpack.config.dev');
var makeServer = require('./src/server/entry');

var config = process.env.NODE_ENV === 'development' ? devConfig : null;

makeServer(process.env.NODE_ENV, config);
