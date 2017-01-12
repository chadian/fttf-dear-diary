import Ember from 'ember';
import fetch from "ember-network/fetch";

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/chadian')
      .then(function(response) {
        return response.json();
      });
  }
});
