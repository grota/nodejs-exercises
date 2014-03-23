var fs = require('fs')
var fname = process.argv[2];
fs.readFile(fname, {encoding: 'utf8'}, function (err, data) {
  var lines = data.split('\n');
  console.log(lines.length-1);
});
