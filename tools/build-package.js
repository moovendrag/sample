var tar = require('tar');

tar.c(
  {
    gzip: true,
    file: 'auto-trek-package.tar.gz'
  },
  [
    'package.json',
    'server',
    'static-html',
    'instantauto/dist'
  ]
).then(function () {
  console.log('Package Created');
});
