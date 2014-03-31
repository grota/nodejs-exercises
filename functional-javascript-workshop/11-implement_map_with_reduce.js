module.exports = newmap

function newmap (ary, fun) {
  return ary.reduce(function(acc, cur, idx, arr) {
    return acc.concat(fun(cur, idx, arr));
  }, []);
}

