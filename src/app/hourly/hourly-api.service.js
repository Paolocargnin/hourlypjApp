'use strict';

angular.module('hourlyPjApp').
  factory('hourlyPj', [ '$resource', function($resource) {
    var apiUrl= 'http://192.168.0.164:3000';
    // var apiUrl= 'http://localhost:3000';
    return {
      apiUrl: apiUrl,
      objects: $resource(apiUrl+'/:object/:clientId',
        {
          object: '@object',
          clientId:'@clientId'
        },
        {
          edit: {
            method:'PUT', 
            // params:{
            // }
          }
        })
    }

  }]);