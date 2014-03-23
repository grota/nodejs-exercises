var http = require('http')
var bl = require('bl')
var arrived = [];
var total = 0;

for (var i=0; i < 3; i++) {
  mothereffingjs(i);
}

function mothereffingjs(i) {
  var url = process.argv[2+i];
  http.get(url, function(res) {
    res.pipe(bl( function(err, data) {
      if (err) {
        return console.log(data);
      }
      arrived[i] = data.toString();
      total++;
      if (total == 3) {
        for (var j=0; j < 3; j++) {
          console.log(arrived[j]);
        }
      }
    } ));
  });
}
