Package.describe({
  summary: "Pure CSS emoticons",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use('jquery');
  api.addFiles('css/jquery.cssemoticons.css', ['client']);
  api.addFiles('js/jquery.cssemoticons.js', ['client']);
});
