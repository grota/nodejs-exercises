var split = require('split');
var fs = require('fs');
var util = require('util');
fs.createReadStream(process.argv[2]).pipe(split()).on('data', function(line) {
  process.stdout.write(util.inspect(new Buffer(line))+"\n");
});
