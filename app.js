var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];
var server = net.createServer(function (socket) {
  var date = new Date();
  var string = strftime('%Y-%m-%d %H:%M\n');
  socket.end(string);
});
server.listen(port)
