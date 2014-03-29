var i = process.argv[2];
var f = new Uint32Array(1);
f[0] = i;
var s = Uint16Array(f.buffer);
console.log(JSON.stringify(s));
