var util = require('util');
var c='';
process.stdin.on('data', function (buf) {
  c+=buf;
});
process.stdin.on('end', function () {
  process.stdout.write(util.inspect(new Buffer(c))+"\n");
});
