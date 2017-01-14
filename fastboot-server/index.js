'use strict';

const express = require('express');
const fastbootMiddleware = require('fastboot-express-middleware');
const path = require('path');
const app = express();

app
  .get('/', fastbootMiddleware('../dist'))
  // when using your own express server,
  // you have to manage loading the assets the built app yourself
  .use('/assets', express.static(path.join(__dirname, '../dist/assets')))
  .listen(3000);
