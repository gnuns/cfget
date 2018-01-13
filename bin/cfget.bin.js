#!/usr/bin/env node

const got = require('got')

try {
  const urlToGet = process.argv[2] || process.argv[1]
  const page = require('../cfget')(urlToGet)
  page
  .then(async (request) => {
    const response = await got(request.url, request)
    console.log(response.body)
  })
} catch (e) {
  console.log(e)
  process.exit(1)
}
