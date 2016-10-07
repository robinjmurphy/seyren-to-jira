#! /usr/bin/env node

'use strict';

const pkg = require('../package');
const program = require('commander');

program
  .version(pkg.version)
  .parse(process.argv);
