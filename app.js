var express = require('express')
var path = require('path')
var app = express()

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(3000)
