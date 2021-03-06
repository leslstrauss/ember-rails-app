import startApp from 'ember-rails-app/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - About Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('About page', function() {
  visit('/').then(function() {
    click("a:contains('About')").then(function() {
      equal(find('h4').text(), 'About');
    });
  });
});
