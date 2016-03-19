var express = require('express');
//var compression = require('compression');
var app = express();

//app.use(compression());
app.use(express.static('public', { maxAge: 86400000 }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000');
});
