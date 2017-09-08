// index.js 
var lodash = require('lodash');
 
var output = lodash.without([1, 2, 3], 1);
console.log(output);
Run the code using node index.js. It should output [2, 3].

If you had not properly installed lodash, you would receive this error:

module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'