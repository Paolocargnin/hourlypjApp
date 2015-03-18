'use strict';

angular.module('hourlyPjApp')
  .controller('MainCtrl', ['$scope', 'hourlyPj',
  function ($scope, hourlyPj) {

    $scope.getClients= function(){
      hourlyPj.clients.query().$promise.then(function(data) {
        $scope.clients=data;
      });
    };

    $scope.getClients();

    $scope.addClient= function(){
		hourlyPj.clients.save($scope.newClient).$promise.then(function(data) {
        $scope.clients.push($scope.newClient);
        $scope.newClient={};
	    });    	
    }

    $scope.deleteClient = function(id){
      hourlyPj.clients.delete({clientId: id}).$promise.then(function(data) {
        $scope.getClients();
      });
    }

  }]);