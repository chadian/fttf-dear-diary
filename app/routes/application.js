import Ember from 'ember';
import fetch from "ember-network/fetch";
const { RSVP } = Ember;

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  model() {
    const avatarUrl = fetch('https://api.github.com/users/chadian')
      .then(response => response.json())
      .then(json => json.avatar_url);

    const blogPosts = this.get('fastboot.shoebox').retrieve('blog-posts');

    return RSVP.hash({
      avatarUrl: avatarUrl,
      blogPosts: blogPosts
    });
  }
});
