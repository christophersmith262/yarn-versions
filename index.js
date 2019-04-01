const getLock = require('./lib/lock-fetcher'),
  buildResult = require('./lib/result-builder')

module.exports = {
  get: async function(lockpath, opts) {
    return await buildResult(await getLock(lockpath), opts)
  },
  getLock: getLock,
  buildResult: buildResult,
}
