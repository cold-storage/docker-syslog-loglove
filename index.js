#!/usr/bin/env node

var log = new(require('loglove'))().log(__filename.substring(process.cwd().length));

log.info('we are logging out something here.');

setInterval(function() {
  log.info('we are logging out something here.');
}, 5000);