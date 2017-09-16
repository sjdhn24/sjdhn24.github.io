const MongoDB = require('mongodb');
const Promise = require('bluebird');

Promise.promisifyAll(MongoDB);

const user = 'nyc_restaurant';
const password = 'qo3TsKqUfTlr33BD';

const user_read = 'nyc_restaurant_read';
const password_read = '4h2Np994ZnxTObZ5';

const db = MongoDB.MongoClient.connect('\
mongodb://nyc_restaurants_write:nE6f1PBvH7GCRNsW@\
cluster0-shard-00-00-hvvim.mongodb.net:27017,\
cluster0-shard-00-01-hvvim.mongodb.net:27017,\
cluster0-shard-00-02-hvvim.mongodb.net:27017/app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

const localDb = MongoDB.MongoClient.connect('mongodb://localhost:27017/local');

module.exports = Promise.props({
  db,
  localDb
});