#!/usr/bin/env node

var log = new(require('loglove'))().log(__filename.substring(process.cwd().length));

log.error('we are logging out something here.');

setInterval(function() {
  log.error('we are logging out something here.');
}, 5000);