const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('abc')

const app = express()

app.set('port', (process.env.PORT || 5000));

//app.use('/static/', express.static('web'))
app.use('/', express.static('web'))

app.get('/', function(req, res) {
  res.send('Hello World ' + req.query.a)
})

app.get('/aboutme/:name', function(req, res) {
  res.send('I am ' + req.params.name)
})

app.get('/db', function (req, res) {
  db.all('SELECT rowid, info FROM lorem', function (err, data) {
    res.send(data);
  })
})

app.listen(app.get('port'), function () {
  console.log('Server is running yoyo buyakasha')
})
