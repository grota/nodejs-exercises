var fs = require('fs')
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function (err, files) {
  var filtered_list = files.filter(function(elem){
    var parts = elem.split('.');
    if (parts.length < 2) return false;
    var file_ext = parts.pop();
    return file_ext === ext;
  });
  console.log(filtered_list.join('\n'));
});
