var express = require('express')
var path = require('path')
var app = express()
var compress = require('compression')

app.use(compress())
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'))
})

var port = process.env.VCAP_APP_PORT || 3000
app.listen(port, function() {
  console.log('server run at port ' + port)
})
