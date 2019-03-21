#!/usr/bin/env node

const yarnVersions = require('../'),
  output = require('../lib/output')

if (process.argv.length < 3) {
  output.help()
  process.exit(1)
}

for (var i in process.argv) {
  if (process.argv[i] == 'help'
    || process.argv[i] == '--help'
    || process.argv[i] == '-h') {
    output.help()
    process.exit()
  }
}

yarnVersions.get(process.argv[2]).then(async result => {
  output.result(result)
}).catch(err => {
  output.error(err)
  process.exit(1)
})
