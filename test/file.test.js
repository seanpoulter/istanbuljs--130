const isTruthy = require('../file').isTruthy
const assert = require('assert')
it('should return "yes" when the arg is truthy', () => assert(isTruthy(5) === 'yes'))
it('should return "no" otherwise', () => assert(isTruthy() === 'no'))
