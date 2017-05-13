function local(name) {
	return (
		"for (var key in " + name + ") {" +
			"eval(" +
				"'var ' + key + ' = " + name + "[\"' + key + '\"]'" +
			");" +
		"}"
	);
}
