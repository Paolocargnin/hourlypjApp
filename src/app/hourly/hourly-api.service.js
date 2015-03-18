'use strict';

angular.module('hourlyPjApp').
  factory('hourlyPj', [ '$resource', function($resource) {
    var apiUrl= 'http://localhost:3000';
    return {
      apiUrl: apiUrl,
      clients: $resource(apiUrl+'/clients/:clientId',
        {
          clientId:'@clientId'
        },
        {
          create: {
            method:'PUT', 
            // params:{
            // }
          }
        })
    }

  }]);