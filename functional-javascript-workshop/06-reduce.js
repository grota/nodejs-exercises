module.exports = function (arr) {
  return arr.reduce(function(prev, curr) {
    prev[curr] = ++prev[curr] || 1;
    return prev;
  }, {});
}
