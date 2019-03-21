function help() {
  process.stdout.write(`
  Usage: yarn-versions <file|url>

    Outputs a json object containing the resolved versions
    of each package for a given yarn.lock file.

  Arguments:
    FILE | URL          Can be a yarn.lock file, or the url to
                        a yarn.lock file.

  Options:
    help, --help, -h    Shows this help text

`)
}

function error(err) {
  process.stderr.write("\n")
  process.stderr.write("An error ocurred:\n")
  process.stderr.write("\n")
  process.stderr.write(err)
  process.stderr.write("\n")
}

function result(obj) {
  process.stdout.write(JSON.stringify(obj, null, 4) + "\n")
}

module.exports = {
  help: help,
  error: error,
  result: result,
}
