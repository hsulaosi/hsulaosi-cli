'use strict';
const utils = require('@hsulaosi-cli/utils')

module.exports = core;

function core() {
    console.log('引用@hsulaosi-cli/utils包----------', utils(10,20))
}