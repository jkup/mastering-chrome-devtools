var express = require('express')
// var compression = require('compression')
var app = express()

app.set('view engine', 'pug')

// app.use(compression())
app.use(express.static('public'))

// Home Page
app.get('/', function (req, res) {
  res.render('index', {
    scripts: ['main.js']
  })
})

// Editing Demo
app.get('/editing', function (req, res) {
  res.render('editing', {
    scripts: ['editing.js']
  })
})

// Debugging Demo
app.get('/debugging', function (req, res) {
  res.render('debugging', {
    scripts: ['debugging.js']
  })
})

// Profiling Demo
app.get('/profiling', function (req, res) {
  res.render('profiling', {
    scripts: ['profiling.js']
  })
})

// Timing Demo
app.get('/timing', function (req, res) {
  res.render('timing', {
    scripts: ['timing.js']
  })
})

// Page Jank Demo
app.get('/page-jank', function (req, res) {
  res.render('page-jank')
})

// Memory Leaks
app.get('/memory-leaks', function (req, res) {
  res.render('memory-leaks/index', {
    scripts: ['memory-leaks.js']
  })
})

app.get('/memory-leaks/accidental-globals', function (req, res) {
  res.render('memory-leaks/accidental-globals', {
    scripts: ['accidental-globals.js']
  })
})

app.get('/memory-leaks/callbacks-and-timers', function (req, res) {
  res.render('memory-leaks/callbacks-and-timers')
})

app.get('/memory-leaks/forgotten-dom', function (req, res) {
  res.render('memory-leaks/forgotten-dom')
})

app.get('/memory-leaks/closures', function (req, res) {
  res.render('memory-leaks/closures')
})

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000')
})
