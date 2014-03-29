
module.exports = function getShortMessages(arr) {
  // the solution does not use the f variable but calls map directly
  var f = arr.filter(function (v) { return v.message.length < 50 });
  return f.map(function (v) { return v.message; })
}
