import Ember from 'ember';
import startApp from 'ember-rails-app/tests/helpers/start-app';

var App;

module('Integration - Home Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('RealFeelz home page', function() {
  visit('/').then(function() {
    equal(find('h1#title').text(), 'RealFeelz');
  });
});
