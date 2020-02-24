const express = require('express')
const router = express.Router()
const Hello = require('../functions/hello')

router.get('/', function(req, res, next) {
  const hello = new Hello()
  res.status(200)
  res.json({
    message: hello.greeting(req.query.name),
    requestPath: req.path,
  })
})

router.post('/', function(req, res, next) {
  const hello = new Hello()
  res.status(200)
  res.json({
    message: hello.greeting(req.body.name),
    requestPath: req.path,
  })
})

module.exports = router
