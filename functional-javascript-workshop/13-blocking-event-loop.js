module.exports = repeat_async
function repeat_async (op, num) {
  if(num <= 0) return
  op()
  setTimeout(repeat_async.bind(this, op, num-1), 100);
}
