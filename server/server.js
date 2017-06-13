'use strict';

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var proxyMiddleware = require('http-proxy-middleware');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var config = require('./config.js')();

var app = express();
app.disable('x-powered-by');

app.use(compression());
app.use(morgan('combined'));

/**
 * This responds with a status. It is really simple at this time
 * but this is needed for a Load Balancer.
 */
app.get('/site/health', function (req, res) {
  res.sendStatus(200);
});

/**
 * We have a concept of maintence mode. This is set by an
 * environment variable.
 */
if (process.env.MAINTENCE_MODE === 'true') {
  app.get('*', function (req, res) {
    res.sendFile(path.resolve('./static-html/maintenance.html'));
  });
} else {
  var baseDist = path.resolve('./instantauto/dist');
  app.use(proxyMiddleware(config.proxy.api.url, config.proxy.api.options));
  app.use('/', express.static(baseDist));
  // Catch All (Send other routes to the index)
  app.use(function (req, res, next) {
    res.sendFile(path.join(baseDist, 'index.html'));
  });
}
var port = process.env.PORT || config.port;

app.listen(port, function () {
  console.log('Server is up and running on port: %d using environment: %s', port, process.env.NODE_ENV);
});

app.use(function (req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();
});
