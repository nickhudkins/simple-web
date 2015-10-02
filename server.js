require('babel/register')({
	stage: 0,
});

var config = require('./webpack.config.dev');
var makeServer = require('./src/server/entry');

makeServer(config);
