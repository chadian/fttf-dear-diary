'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fastbootMiddleware = require('fastboot-express-middleware');
const ductTapedMiddleware = require('./duct-taped-on-middleware');
const path = require('path');
const app = express();

app
  .use(ductTapedMiddleware)
  .get('/', fastbootMiddleware('../dist'))
  // when using your own express server,
  // you have to manage loading the assets the built app yourself
  .use('/assets', express.static(path.join(__dirname, '../dist/assets')))
  .listen(3000);
