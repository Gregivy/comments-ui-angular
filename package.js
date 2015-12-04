Package.describe({
  name: "comments-ui-angular",
  summary: "AngularJS wrapper for Meteor's Comments-UI package",
  version: "0.0.1",
  documentation: 'README.md',
  git: "https://github.com/gregivy/comments-ui-angular"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  api.imply('arkham:comments-ui');

  api.addFiles([
    'comments-ui-angular.js',
    'comments-box-directive.js'
  ], 'client');
});
