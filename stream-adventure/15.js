var combine = require('stream-combiner');
var through = require('through');
var split   = require('split');
var zlib    = require('zlib');
var tar     = require('tar');
var crypto = require('crypto');

var cypher = process.argv[2];
var pass   = process.argv[3];

var parser = tar.Parse();
parser.on('entry', function(e) {
  //console.log('entry event');
  if (e.type == 'File') {
    //it's actually a fricking stream
    var md5_stream = crypto.createHash('md5', {encoding: 'hex'});
    var through_stream = through(
      function (buf) {
        this.queue(buf);
      },
      function () {
        this.queue(' ' + e.path + '\n');
      }
    );
    e.pipe(md5_stream).pipe(through_stream).pipe(process.stdout);
  }
});

var combined_stream = combine(
  crypto.createDecipher(cypher, pass),
  zlib.createGunzip(),
  parser
);
// parser outputs each of the file contrents
process.stdin.pipe(combined_stream);//.pipe(process.stdout)

