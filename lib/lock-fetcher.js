const fs = require('fs'),
  request = require('request'),
  lockfile = require('@yarnpkg/lockfile')

module.exports = async function getLock(lockpath) {
  return new Promise((accept, reject) => {
    if (/^http[s]?/.test(lockpath)) {
      request.get(lockpath, (err, response, body) => {
        if (!err) {
          accept(lockfile.parse(body))
        }
        else {
          reject(err)
        }
      })
    }
    else {
      fs.readFile(lockpath, (err, data) => {
        if (!err) {
          accept(lockfile.parse(data.toString()))
        }
        else {
          reject("Could not read " + lockpath)
        }
      })
    }
  })
}
