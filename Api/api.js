var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')


var router = Router()
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World from child process!')
})

var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
server.listen(3001)


//module.exports = process
