//Modules in Node.JS uses CommonJS
//Modules are encapsulated code (only share minimum, we only share what we want)

//Own Module uses ./
//Third Party Module starts with only one single quotation mark.
const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative.js');

require('./7-mindgrenade.js');

// sayHi(names);
// sayHi(names.john);

