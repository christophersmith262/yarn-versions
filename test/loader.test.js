jest.mock('request')

const fs = require('fs'),
  request = require('request'),
  getLock = require('../').getLock,
  lockPath = __dirname + '/fixtures/yarn.lock',
  expectedObject = JSON.parse(fs.readFileSync(__dirname + '/fixtures/yarn.loaded.json').toString())

test('Loads yarn.lock from the filesystem', async () => {
  await expect(await getLock(lockPath)).toEqual(expectedObject)
})

test('Loads yarn.lock over http(s)', async () => {
  const url = 'https://github.com/christophersmith262/scss-extractor.git'

  request.get.mockImplementation((lockpath, callback) => {
    callback(null, null, fs.readFileSync(lockPath).toString())
  })

  await expect(await getLock(url)).toEqual(expectedObject)
  await expect(request.get).toBeCalledWith(url, expect.anything())
})

test('Errors when loading a non-existent lock file', async () => {
  await expect(getLock('does-not-exist')).rejects.toBe("Could not read does-not-exist")
})
