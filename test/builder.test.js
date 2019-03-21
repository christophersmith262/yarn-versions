const fs = require('fs'),
  buildResult = require('../').buildResult

test('Builds output map', async () => {
  const inputJson = JSON.parse(fs.readFileSync(__dirname + '/fixtures/yarn.loaded.json').toString()),
    expected = JSON.parse(fs.readFileSync(__dirname + '/fixtures/yarn.built.json').toString())
  expect(await buildResult(inputJson)).toEqual(expected)
})
