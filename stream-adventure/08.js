var http = require('http');
var options = {
  hostname: 'localhost',
  port: 8000,
  method: 'POST',
};
var req = http.request(options, function(res) {
  res.pipe(process.stdout);
});
process.stdin.pipe(req);
