var argv = process.argv;
argv.shift(); argv.shift();
console.log(argv.reduce(function(prev, current, index, array) {
  return Number(prev)+Number(current);
}));
