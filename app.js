var fs = require('fs')
var fname = process.argv[2];
var contents = fs.readFileSync(fname);
var lines = contents.toString().split('\n');
console.log(lines.length-1);
