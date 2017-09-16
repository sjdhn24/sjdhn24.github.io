const express = require('express')
// const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database('abc')
//const MongoDB = require('mongodb');
const MongoDB = require('mongodb');
//const promise = require('promise')
let db;

//function Promise(fn) {
  //const successCallbacks = [];
  //const failCallbacks = [];
  //fn(function (value) {
  //  let a = successCallbacks.pop();
  //  while (a) {
    //  a(value);
      //a = successCallbacks.pop();
    //}
  //}, function (err) {
    //failCallbacks.forEach(cb => cb(err));
  //});

//  return {
  //  then: function (cb) {
    //  successCallbacks.push(cb);
    //},
    //catch: function (cb) {
      //failCallbacks.push(cb);
  //  }
  //}
//}

// const url = 'mongodb://localhost:27017/local';
const url = '\
mongodb://nyc_restaurants_write:nE6f1PBvH7GCRNsW@\
cluster0-shard-00-00-hvvim.mongodb.net:27017,\
cluster0-shard-00-01-hvvim.mongodb.net:27017,\
cluster0-shard-00-02-hvvim.mongodb.net:27017/app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';


MongoDB.MongoClient.connect(url, function (err, database) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Connection successfull: ', url);
  db = database;
});

const app = express()
var xFrameOptions = require('x-frame-options')

  



function getData(res, id) {
  db.collection('restaurants').findOne({
    'camis': Number(id)
  }).then(function(doc) {
      if (!doc) {
        throw new Error(id, 'Not found');
      }
      res.send(doc)
    })
}


app.set('port', (process.env.PORT || 5000));
app.use('/', express.static('web'))

app.get('/', function(req, res) {
  res.send('Hello World ' + req.query.a)
})

app.get('/aboutme/:name', function(req, res) {
  res.send('I am ' + req.params.name)
})

app.get('/sajuh/:id', function (req, res) {
  getData(res, req.params.id)
})


app.listen(app.get('port'), function () {
  console.log('Server is running yoyo buyakasha')
})
