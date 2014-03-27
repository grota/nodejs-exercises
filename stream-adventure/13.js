var combine = require('stream-combiner');
var through = require('through');
var split   = require('split');
var zlib    = require('zlib');
module.exports = function () {
  var hash = {}
  return combine(
      split(),
      through( function (line) {
        // write callback
        if (!line) { return; }
        var jobj = JSON.parse(line);
        if (jobj.type == 'genre') {
          if (hash['name']) { this.queue(JSON.stringify(hash) + '\n'); }
          hash['name'] = jobj.name;
          hash['books'] = [];
        }
        else if (jobj.type == 'book') {
          hash['books'].push(jobj.name);
        }
      }, function() {
        // end callback
        if (hash['name']) { this.queue(JSON.stringify(hash) + '\n'); }
        this.queue(null);
      }),
      zlib.createGzip()
  );
}
//process.stdin.pipe(module.exports()).pipe(process.stdout);
