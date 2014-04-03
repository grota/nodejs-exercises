module.exports = Spy

function Spy (target, method) {
  var original = target[method];
  target[method] = proxy_f
  var result = { count: 0 }
  function proxy_f() {
    result.count++;
    return original.apply(this, arguments)
  }
  return result;
}

//var spy = Spy(console, 'error')
//console.error('a');
//console.error('b');
//console.error('c');
//console.log(spy.count);
