# LocalScope

## A tool to import members of objects into local scopes in JavaScript

I wrote a blog post explaining the reasoning behind this and how it works
[here](https://owen.cafe/1/native-imports-in-javascript).

Here is a good example of how to use this code:

```
var local = require("localscope");

let obj = {
	a: "Hello,",
	b: "World!"
};

function testImport() {
	eval(local("obj"));

	console.log(a, b);
	// Woah! a and b were declared in the scope of this function
}

testImport();
```
