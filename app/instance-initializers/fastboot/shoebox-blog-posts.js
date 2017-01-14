export function initialize(appInstance) {
  const fastboot = appInstance.lookup('service:fastboot');
  const shoebox = fastboot.get('shoebox');

  const MongoClient = FastBoot.require('mongodb').MongoClient;
  const mongoUrl = 'mongodb://localhost:27017/dear-diary';
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) {
      console.log('Unable to connect to MongoDB in `shoebox-blog-posts` instance-initalizer');
      db.close();
      return;
    }

    const postsCollection = db.collection('blog-posts');
    postsCollection.find({}).toArray(function(err, posts) {
      shoebox.put('blog-posts', posts);

      if (err) {
        console.log('Unable to find blog-posts in MongoDB');
        db.close();
        return;
      }
    });

    db.close();
  });
}

export default {
  name: 'shoebox-blog-posts',
  initialize
};
