'use strict';

angular.module('hourlyPjApp')
  .controller('MainCtrl', ['$scope', 'hourlyPj',
  function ($scope, hourlyPj) {
    var a= hourlyPj.clients.get().$promise.then(function(data) {
      $scope.clientsObj=data;
    });
  }]);