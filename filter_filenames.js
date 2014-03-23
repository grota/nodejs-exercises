var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
  fs.readdir(dir, function (err, files) {
    if (err)
      return cb(err);
    var filtered_list = files.filter(function(elem){
      var file_ext = path.extname(elem);
      return file_ext === '.'+ext;
    });
    cb(false, filtered_list);
  });
}
