module.exports = async function (lock, opts) {
  let map = {}

  opts = opts || {}

  for (var dependency in lock.object) {
    let parts = dependency.split('@'),
      requestedVersion = parts.pop(),
      packageName = parts.join('@'),
      resolvedVersion = lock.object[dependency]['version'],
      resolvedPath = lock.object[dependency]['resolved']

    if (!map[packageName]) {
      map[packageName] = {}
    }

    if (opts.showRequested) {
      map[packageName][resolvedVersion] = { requestedVersion, resolvedPath }
    }
    else {
      map[packageName][resolvedVersion] = resolvedPath
    }
  }

  return map
}
