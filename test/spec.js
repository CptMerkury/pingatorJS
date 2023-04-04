const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.testMethod([1,2,3]), 6);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);