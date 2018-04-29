module.exports = function(name) {
	return (
		"eval(" +
			"Object.keys(" + name + ").map(" +
				"function(key) {" +
					"return 'var ' + key + ' = " + name + "[\"' + key + '\"];'" +
				"}" +
			").join('')" +
		")"
	);
};

