var ff = require('./filter_filenames.js')
var dir = process.argv[2];
var ext = process.argv[3];
//console.log(ff);
ff(dir, ext, function(err, filtered_list){
  if(err)
    return console.log('error occurred');
  console.log(filtered_list.join('\n'));
});
