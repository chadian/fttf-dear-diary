import Ember from 'ember';
import fetch from "ember-network/fetch";
import pagedArray from 'ember-cli-pagination/computed/paged-array';

// pagination setup per `ember-cli-pagination` documentation:
// setup per https://github.com/mharris717/ember-cli-pagination#local-store
export default Ember.Controller.extend({
  // setup our query params
  queryParams: ["page"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 5,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('model.blogPosts', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages",

  actions: {
    savePost(data) {
      const addBlogPost = fetch(`http://${document.location.host}/blog-posts`, {
        method: "POST",
        // important to set json headers especially for
        // express `body-parser` express middleware and
        //  handling response body
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // if successful, add to our model and
      // assume it's there
      addBlogPost.then(() => {
        this.get('model.blogPosts').addObject(data);
      });
    }
  }
});
