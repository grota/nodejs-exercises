// The solution uses the much saner createStream (bidirectiona)
// but this is easier to analyze for me
var trumpet = require('trumpet');
var through = require('through');
var tr1 = trumpet();
var tr2 = trumpet();
// piping into this write-stream informs tr1
// what it has to use as a substitution
// for the selector
var ws = tr1.select('.loud').createWriteStream();
// what we get from this read-stream is just the
// inner html of matched element
var rs = tr2.select('.loud').createReadStream();
// here we set up the html streaming transformation
rs.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(ws);
// the output of the pipe just after "pipe(tr2)"
// is the whole input coming into the pipe itself
process.stdin.pipe(tr2).pipe(tr1).pipe(process.stdout);
