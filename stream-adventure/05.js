var split = require('split');
var through = require('through');
var i=1;
process.stdin.pipe(split()).pipe(through(function (line) {
  var text = (i%2) ? line.toString().toLowerCase() : line.toString().toUpperCase();
  i++;
  this.queue(text+"\n");
})).pipe(process.stdout);

