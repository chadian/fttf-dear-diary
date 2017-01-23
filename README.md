# Dear-diary

A duct-taped together showing what's possible with Ember FastBoot and a quickly put together blog.
* `mongodb` with `FastBoot.require` and `fastboot.shoebox` for pulling the posts
* `ember-network` for making requests isomorphically
* Shared express server with `fastboot-express-middlware` and makeshift API middleware for `POST`ing new blog posts

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with yarn)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `yarn install`
* `bower install`
* change into `fastboot-server` directory
* `yarn`

## Running / Development

Assumes you have a mongodb server running
* Avaliable at: `mongodb://localhost:27017/dear-diary`
* With a collection `blog-posts`
* With objects containing the structure: `{ title: '', date: '', content: ''}`
* *yes, these should be abstracted into configuration, but hey, it's a proof of concept*

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running node server
# Build first via `ember build`
* change directory into `fastboot-server`
* `node server`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

