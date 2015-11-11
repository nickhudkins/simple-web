/* eslint no-var: 0 camelcase: 0 */
var clc = require('cli-color');
var child_process = require('child_process');
var PROJECT_NAME = require('../../package.json').name;


console.log(
  clc.yellow('****************************')
);
console.log(
  clc.yellow('*   ') + '🚀   ' +
  clc.green('Deploying...') +
  '  🚀' + clc.yellow('    *')
);
 console.log(
   clc.yellow('****************************')
 );


child_process.exec([
  'eval "$(docker-machine env ' + PROJECT_NAME + '-' + process.env.DOCKER_ENV + ')" && ' +
  'docker-compose build && ' +
  'docker-compose up -d'
], function(err) {
  if (!err) {
    console.log('\n👍  ' + clc.yellow('Deployed!') + '\n');
  } else {
    console.log(err);
  }
});
