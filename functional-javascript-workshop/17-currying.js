module.exports = curryN

function curryN (fn, n) {
  if (typeof n !== 'number') n = fn.length

  function someRecursiveF(prev) {
    return function(arg) {
      var args = prev.concat(arg);
      if (args.length < n) {
        return someRecursiveF(args);
      } else {
        return fn.apply(this, args)
      }
    };
  }

  return someRecursiveF([]);
}
