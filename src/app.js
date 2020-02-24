const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const rootRouter = require('./routing/root')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', rootRouter)

app.use((req, res) => {
  res.status(404)
  res.json({
    message: 'API Enddpoint is Not Found',
    requestPath: req.path,
  })
})

module.exports = app
