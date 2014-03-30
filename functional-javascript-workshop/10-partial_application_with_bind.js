module.exports = cl_with_ns
function cl_with_ns (ns) {
  return console.log.bind(console, ns)
}

