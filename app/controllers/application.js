import Ember from 'ember';
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
  totalPagesBinding: "pagedContent.totalPages"
});
