var duplexer = require('duplexer');
var through  = require('through');

module.exports = function (counter_rs) {
  var hashcount = {};
  var ws = through(function (obj) {
    // write callback
    var country = obj.country;
    if (!hashcount[country])
      hashcount[country] = 0;
    hashcount[country]++;
  }, function () {
    // end callback
    counter_rs.setCounts(hashcount);
  });
  return duplexer(ws, counter_rs);
}
