import startApp from 'ember-rails-app/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Statements Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Statements page', function() {
  visit('/').then(function() {
    click("a:contains('Statements')").then(function() {
      equal(find('h3#title').text(), 'Statements');
    });
  });
});