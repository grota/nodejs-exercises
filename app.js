var fs = require('fs')
var path = require('path')
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function (err, files) {
  var filtered_list = files.filter(function(elem){
    var file_ext = path.extname(elem);
    return file_ext === '.'+ext;
  });
  console.log(filtered_list.join('\n'));
});
