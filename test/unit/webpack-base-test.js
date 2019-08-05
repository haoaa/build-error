/* eslint-disable */

const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    console.log(baseConfig.entry.index)
    it('entry', () => {
        assert.equal(baseConfig.entry.index.endsWith('/smoke/template/src/index/index.js'), true);
    });
});