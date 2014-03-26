var concat = require('concat-stream');
var sinkreverse = concat(function (alldata) {
  var reverse = alldata.toString().split('').reverse().join('') + "\n";
  process.stdout.write(reverse);
});
process.stdin.pipe(sinkreverse);
