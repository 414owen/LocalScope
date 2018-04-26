const assert = require('assert');
const loc = require('../local.js');

const addables = {'number':123,'string':'hello world','object':{a:'hi',b:666}};

describe('Local.js', function() {
	it('Should import', function() {
		assert.ok(loc);
	});
	for (let k in addables) {
		it('Should add ' + k + 's',function() {
			let test_vals = {a:addables[k]};
			eval(loc(test_vals,'test_vals'));
			assert.ok(a,'Didn\'t instantiate');
			assert.ok((typeof a) === k, 'Instantiated with wrong type');
			assert.ok(JSON.stringify(a) === JSON.stringify(addables[k]), 'Instantiated with wrong value');
		});
	}
	it('Should work for functions',function() {
		let obj = {
			func : function() {
				return 123987;
			}
		};
		eval(loc(obj,'obj'));
		assert.ok(func,'Didn\'t instantiate');
		assert.ok((typeof func) === 'function', 'Instantiated with wrong type');
		assert.ok(func() == 123987, 'Function call works');
	});
});
