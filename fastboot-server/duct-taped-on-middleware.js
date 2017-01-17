const bootlogMiddleware = require('express').Router();
module.exports = bootlogMiddleware;

// needed to handle the POST body response
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

bootlogMiddleware
  .use(bodyParser.json())
  .post('/blog-posts/', function(req, res) {
    const { title, date, content } = req.body;

    const url = 'mongodb://localhost:27017/dear-diary';
    MongoClient.connect(url, function(err, db) {
      const collection = db.collection('blog-posts');
      collection.insert({ title, date, content });

      console.log('New blog post', { title, date, content });
    });

    res.json(req.body);
  });
