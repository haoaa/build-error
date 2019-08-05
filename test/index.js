const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));
/* eslint-disable */

describe('builder-webpack test case', () => {
    require('./unit/webpack-base-test');
});