var through = require('through');
process.stdin.pipe(through(function(buf) {
  var upper = buf.toString().toUpperCase();
  this.queue(upper);
}, function () {/*end*/}) ).pipe(process.stdout)
