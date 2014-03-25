var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
var s = http.createServer(function(req,res) {
  fs.readFile(file, function (err, datafile) {
    res.end(datafile);
  });
});
s.listen(port);
