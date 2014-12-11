import startApp from 'ember-rails-app/tests/helpers/start-app';
import Ember from 'ember';

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
    click("a:contains('RealFeelz')").then(function() {
    equal(find('h2#title').text(), 'RealFeelz');
    });
  });
});