'use strict';

module.exports = function () { // eslint-disable-line padded-blocks
  switch (process.env.NODE_ENV) {
    case 'local':
      return {
        proxy: {
          api: {
            url: '/api',
            options: {
              target: 'http://localhost:8080',
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        },
        port: 3000
      };
    case 'development':
      return {
        proxy: {
          api: {
            url: '/api',
            options: {
              target: 'http://developmentservercluster',
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        },
        port: 8080
      };
    case 'production':
      return {
        proxy: {
          api: {
            url: '/api',
            options: {
              target: 'http://productionservercluster',
              pathRewrite: {
                '^/api': ''
              }
            }
          }
        },
        port: 8080
      };
    default:
      throw new Error('Environment is not recognized: ' + process.env.NODE_ENV);
  }
};
