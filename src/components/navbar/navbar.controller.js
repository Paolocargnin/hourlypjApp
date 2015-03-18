'use strict';

angular.module('hourlyPjApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
