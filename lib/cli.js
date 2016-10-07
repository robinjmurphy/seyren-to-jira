#! /usr/bin/env node

const pkg = require('../package');
const program = require('commander');

program
  .version(pkg.version)
  .parse(process.argv);
