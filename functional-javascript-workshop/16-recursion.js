function getDepends(obj, result) {
  result = result || []
  var dependencies = obj.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
      var key = dep + '@' + obj.dependencies[dep].version
      if (result.indexOf(key) === -1) result.push(key)
      getDepends(obj.dependencies[dep], result)
    })
  return result.sort()
}
module.exports = getDepends
