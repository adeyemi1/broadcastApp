'use strict';

var app = angular.module('broadcastApp', [
  'ngRoute',
  'ngCookies'
]);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/products.view.html',
          controller: 'ProductsCtrl',
        })
        .when('/confirmation', {
          templateUrl: '/views/confirmation.view.html',
          controller: 'ConfirmationCtrl',
        })
        .otherwise({
          redirectTo: '/',
          caseInsensitiveMatch: true
        });
    }
  ])
  .factory('selectionService', function() {

    var data = {
      selection: ''
    };

    return {
      getSelection: function() {
        return data.selection;
      },
      setSelection: function(selection) {
        data.selection = selection;
      }
    };
  });