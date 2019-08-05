/* eslint-disable */

const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        assert.equal(baseConfig.entry.index.endsWith('uilder-webpack/test/smoke/template/src/index/index.js'), true);
    });
});