function localScope(obj) {
	let decls = '';
	for (let key in obj) {
		decls = 'var ' + key + ' = ' + JSON.stringify(obj[key]) + ';\n';
	}
	return decls;
}

module.exports = localScope;
