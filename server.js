var express = require('express')
//var compression = require('compression')
var app = express()

app.set('view engine', 'pug')

//app.use(compression())
app.use(express.static('public', { maxAge: 86400000 }))

app.get('/', function (req, res) { res.render('index') })
app.get('/editing', function (req, res) { res.render('editing') })
app.get('/debugging', function (req, res) { res.render('debugging') })
app.get('/profiling', function (req, res) { res.render('profiling') })
app.get('/memory-leaks', function (req, res) { res.render('memory-leaks') })

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000')
})
