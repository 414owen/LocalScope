const assert = require('assert');
const loc = require('../local.js');

describe('Local.js', function() {
	it('Should import', function() {
		assert.ok(loc);
	});
});
