#!/usr/bin/env node

const yarnVersions = require('../'),
  output = require('../lib/output')

if (process.argv.length < 3) {
  output.help()
  process.exit(1)
}

let showRequested = false

for (var i in process.argv) {
  if (process.argv[i] == 'help'
    || process.argv[i] == '--help'
    || process.argv[i] == '-h') {
    output.help()
    process.exit()
  }
  else if (process.argv[i] == '-r'
    || process.argv[i] == '--requested') {
    showRequested = true
  }
}

yarnVersions.get(process.argv[2], { showRequested }).then(async result => {
  output.result(result)
}).catch(err => {
  output.error(err)
  process.exit(1)
})
