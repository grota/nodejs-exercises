var http = require('http');
var url = require('url');
var querystring = require('querystring');
var port = process.argv[2];

function parseDate(qs) {
  var queryobj = querystring.parse(qs);
  var isostring = queryobj.iso;
  var date = new Date(isostring);
  return date;
}

var s = http.createServer(function(req,res) {
  var parsedurl = url.parse(req.url);
  switch (parsedurl.pathname) {
    case '/api/parsetime':
      var date = parseDate(parsedurl.query)
      var obj = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
    break;
    case '/api/unixtime':
      var date = parseDate(parsedurl.query)
      var obj = { unixtime: date.getTime() };
    break;
  }
  if (obj !== undefined) {
    res.writeHead(200, { 'Content-Type': 'application/json'  });
    res.end(JSON.stringify(obj));
  }
});
s.listen(port);
