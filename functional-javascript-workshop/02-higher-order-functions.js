var calledtimes = 0;
module.exports = function callNtimes(f, n) {
  if (calledtimes == n) {
    return f;
  }
  calledtimes++;
  f();
  return callNtimes(f, n);
}
