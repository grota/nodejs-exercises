module.exports = cl_with_ns

function cl_with_ns (ns) {
  return function () {
    var na = Array.prototype.slice.call(arguments);
    na.unshift(ns);
    console.log.apply(console, na)
  }
}
