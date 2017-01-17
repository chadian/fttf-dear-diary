import Ember from 'ember';
import fetch from "ember-network/fetch";
const { RSVP } = Ember;

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  model() {
    const fastboot = this.get('fastboot');

    let blogPosts;
    if (fastboot.get('isFastBoot')) {
      blogPosts = this.pullBlogPosts();
      blogPosts.then(posts => this.get('fastboot.shoebox').put('blog-posts', posts));
    } else {
      blogPosts = RSVP.resolve(this.get('fastboot.shoebox').retrieve('blog-posts'));
    }

    const avatarUrl = fetch('https://api.github.com/users/chadian')
      .then(response => response.json())
      .then(json => json.avatar_url);

    return RSVP.hash({
      avatarUrl: avatarUrl,
      blogPosts: blogPosts
    });
  },

  pullBlogPosts() {
    const MongoClient = FastBoot.require('mongodb').MongoClient;
    const mongoUrl = 'mongodb://localhost:27017/dear-diary';

    const pullBlogPosts = new RSVP.Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl, function(err, db) {
        if (err) {
          db.close();
          reject('Unable to connect to MongoDB');
          return;
        }

        const postsCollection = db.collection('blog-posts');
        postsCollection.find({}).toArray(function(err, posts) {
          db.close();

          if (err) {
            reject('Unable to find blog-posts in MongoDB');
            return;
          }

          resolve(posts);
        });
      });
    });

    return pullBlogPosts;
  }
});
