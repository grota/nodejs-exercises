process.stdin.on('data', function(buf){
  var b = new Uint8Array(buf.length);
  for (var i = 0; i < buf.length; i++) {
    b[i] = buf[i];
  }
  console.log(JSON.stringify(b));
});
