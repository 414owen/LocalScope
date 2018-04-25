const assert = require('assert');
const loc = require('../local.js');

const addables = {'number':123,'string':'hello world','object':{a:'hi',b:666}};

describe('Local.js', function() {
	it('Should import', function() {
		assert.ok(loc);
	});
	for (let k in addables) {
		it('Should add ' + k + 's',function() {
			eval(loc({a:addables[k]}));
			assert.ok(a,'Didn\'t instantiate');
			assert.ok((typeof a) === k, 'Instantiated with wrong type');
			assert.ok(a === addables[k], 'Instantiated with wrong value');
		});
	}
});
