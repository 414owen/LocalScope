function localScope(obj,ident) {
	var decls = '';
	for (let key in obj) {
		decls += 'var ' + key + ' = ' + ident + '.' + key + ';\n';
	}
	return decls;
}

module.exports = localScope;
