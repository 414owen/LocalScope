function localScope(name) {
	return (
		"for (var key in " + name + ") {" +
			"eval(" +
				"'var ' + key + ' = " + name + "[\"' + key + '\"]'" +
			");" +
		"}"
	);
}

module.exports = localScope;
