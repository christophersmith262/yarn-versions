const getLock = require('./lib/lock-fetcher'),
  buildResult = require('./lib/result-builder')

module.exports = {
  get: async function(lockpath) {
    return await buildResult(await getLock(lockpath))
  },
  getLock: getLock,
  buildResult: buildResult,
}
