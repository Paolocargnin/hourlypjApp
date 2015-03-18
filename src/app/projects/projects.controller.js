'use strict';

angular.module('hourlyPjApp')
  .controller('ProjectCtrl', ['$scope', 'hourlyPj',
  function ($scope, hourlyPj) {
    $scope.objectApi= 'projects';

    $scope.getClients= function(){
      hourlyPj.objects.query({object:$scope.objectApi}).$promise.then(function(data) {
        $scope.clients=data;
      });
    };

    $scope.getClients();

    $scope.addClient= function(){
    hourlyPj.objects.save(_.extend({object:$scope.objectApi},$scope.newClient)).$promise.then(function(data) {
        $scope.clients.push($scope.newClient);
        $scope.newClient={};
      });     
    }

    $scope.deleteClient = function(id){
      hourlyPj.objects.delete(_.extend({object:$scope.objectApi},{clientId: id})).$promise.then(function(data) {
        $scope.getobjects();
      });
    }

    $scope.updateClient = function(client){
      hourlyPj.objects.edit(_.extend({object:$scope.objectApi},{clientId:client._id},client)).$promise.then(function(data){
        //do nothing
      });
    }
  }]);