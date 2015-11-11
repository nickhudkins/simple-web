/* eslint no-var: 0 camelcase: 0 */
var clc = require('cli-color');
var child_process = require('child_process');
var PROJECT_NAME = require('../../package.json').name;




if (process.env.CONTAINER_TYPE === 'droplet') {
  if (!process.env.TOKEN) {
    console.log(clc.red('You need to provide a TOKEN for Digital Ocean Droplet creation.'));
  } else {
    console.log(
      clc.yellow('******************************************')
    );
    console.log(
      clc.yellow('*   ') + '🚀  ' +
      clc.green('Creating Docker Droplet...') +
      '  🚀' + clc.yellow('    *')
    );
     console.log(
       clc.yellow('******************************************')
     );
    child_process.exec([
      'docker-machine create ' + PROJECT_NAME + '-prod ' +
      '--driver digitalocean ' +
      '--digitalocean-access-token ' + process.env.TOKEN
    ], function(err) {
      if (!err) {
        console.log('\n👍  ' + clc.yellow('Droplet Created Successfully!') + '\n');
      } else {
        console.log(clc.red(err));
      }
    });
  }
} else {
  console.log(
    clc.yellow('***********************************************')
  );
  console.log(
    clc.yellow('*   ') + '🚀  ' +
    clc.green('Creating Local Docker Machine...') +
    '  🚀' + clc.yellow('    *')
  );
  console.log(
    clc.yellow('***********************************************')
  );

  child_process.exec([
    'docker-machine create ' + PROJECT_NAME + '-local ' +
    '--driver virtualbox'
  ], function(err, stderr, stdout) {
    if (!err) {
      console.log('\n👍  ' + clc.yellow('Local Docker Machine Created Successfully!') + '\n');
      console.log(clc.green(stdout));
    } else {
      console.log(clc.red(stderr));
      console.log(clc.red(stdout));
    }
  });
}
