/*
 * http://raganwald.com/2013/03/28/trampolines-in-javascript.html
 * Implementa tail call elimination sopra ad una classica
 * implementazione di js che nativamente non implementa
 * la tail call elimination
 */

module.exports = trampolined_repeat

function repeat (op, num) {
  if (num) {
    op();
    return function ( ) { return repeat(op, num-1); }
  } else {
    return;
  }
}

function trampolined_repeat (op, num) {
  /*var r=*/ trampoline(repeat, op, num);
}

function trampoline (fun) {
  var args = Array.prototype.slice.call(arguments, 1);
  var result = fun.apply(fun, args);
  while (result instanceof Function) {
    result = result();
  }
  return result;
}
//trampolined_repeat ( function () {console.log('sentinel')}, 4 )
