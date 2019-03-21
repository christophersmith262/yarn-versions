module.exports = async function (lock) {
  let map = {}

  for (var dependency in lock.object) {
    let parts = dependency.split('@'),
      requestedVersion = parts.pop(),
      packageName = parts.join('@'),
      resolvedVersion = lock.object[dependency]['version'],
      resolvedPath = lock.object[dependency]['resolved']

    if (!map[packageName]) {
      map[packageName] = {}
    }

    map[packageName][resolvedVersion] = resolvedPath
  }

  return map
}
