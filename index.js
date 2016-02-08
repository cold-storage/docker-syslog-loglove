#!/usr/bin/env node

var log = new(require('loglove'))().log(__filename.substring(process.cwd().length));

log.info('we are logging out something here.');

// I am not sure why but outside of docker your node app will exit immediately
// on SIGTERM even if you don't have a SIGTERM handler. But when you run your
// app in a docker it does not immediately quit on SIGTERM. It takes 10
// seconds and then docker has to SIGKILL it.
process.on('SIGTERM', function() {
  console.log('SIGTERM');
  process.exit(0);
});

setInterval(function() {
  log.info('we are logging out something here.');
}, 5000);