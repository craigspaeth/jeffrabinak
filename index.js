var express = require('express')
var favicon = require('serve-favicon')

var app = express()
var port = process.env.PORT || 3000

app.use(favicon(__dirname + '/favicon.ico'))
app.use(express.static(__dirname))
app.set('views', __dirname)
app.set('view engine', 'jade')

app.get('/', function(req, res, next) {
  res.render('index')
})

app.listen(port, function() {
  console.log('Listening on ' + port)
})