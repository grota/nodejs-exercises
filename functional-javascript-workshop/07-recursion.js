// the solution is much cleaner
module.exports = reduce

function reduce(arr, fn, initial) {
  function recursivef(arr, prev_value, index, fullarr) {
    if (!arr.length) { return prev_value; }
    var current = arr[0];
    var tail = arr.slice(1);
    var result_inner = fn(prev_value, current, index, fullarr);
    return recursivef(tail, result_inner, index+1, fullarr)
  }
  return recursivef(arr, initial, 0, arr);
}

