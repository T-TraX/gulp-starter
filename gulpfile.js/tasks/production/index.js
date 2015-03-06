// If you are familiar with Rails, this task the equivalent of `rake assets:precompile`
var gulp = require('gulp');

// 1) Add md5 hashes to assets referenced by CSS and JS files
// 2) Manually hash EOT, TTF, and WOFF files
// 3) Update asset references with reved filenames in compiled css + js
// 4) Rev and compress CSS and JS files (this is done after assets, so that if
//    a referenced asset hash changes, the parent hash will change as well
// 5) Update asset references in HTML
// 6) Report filesizes
// 7) Serve up the public directory from static node server

gulp.task('production', [
  'rev-assets',
  'rev-font-workaround',
  'rev-update-references',
  'rev-css-js-compress',
  'update-html',
  'size-report'
]);
