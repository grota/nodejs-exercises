var http = require('http');
var port = process.argv[2];
var s = http.createServer(function(req,res) {
  req.on('data', function(chunk){
    res.write(chunk.toString().toUpperCase());
  });
  req.on('end', function() {
    res.end('');
  })
});
s.listen(port);
