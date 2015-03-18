"use strict";angular.module("hourlyPjApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","ngMaterial"]).config(["$routeProvider","$mdThemingProvider",function(t,e){t.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).when("/projects",{templateUrl:"app/projects/projects.html",controller:"ProjectCtrl"}).otherwise({redirectTo:"/"}),e.theme("default").primaryPalette("blue-grey")}]),angular.module("hourlyPjApp").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),angular.module("hourlyPjApp").controller("ProjectCtrl",["$scope","hourlyPj",function(t,e){t.objectApi="projects",t.getClients=function(){e.objects.query({object:t.objectApi}).$promise.then(function(e){t.clients=e})},t.getClients(),t.addClient=function(){e.objects.save(_.extend({object:t.objectApi},t.newClient)).$promise.then(function(){t.clients.push(t.newClient),t.newClient={}})},t.deleteClient=function(n){e.objects.delete(_.extend({object:t.objectApi},{clientId:n})).$promise.then(function(){t.getobjects()})},t.updateClient=function(n){e.objects.edit(_.extend({object:t.objectApi},{clientId:n._id},n)).$promise.then(function(){})}}]),angular.module("hourlyPjApp").controller("MainCtrl",["$scope","hourlyPj",function(t,e){t.objectApi="clients",t.getClients=function(){e.objects.query({object:t.objectApi}).$promise.then(function(e){t.clients=e})},t.getClients(),t.addClient=function(){e.objects.save(_.extend({object:t.objectApi},t.newClient)).$promise.then(function(){t.clients.push(t.newClient),t.newClient={}})},t.deleteClient=function(n){e.objects.delete(_.extend({object:t.objectApi},{clientId:n})).$promise.then(function(){t.getobjects()})},t.updateClient=function(n){e.objects.edit(_.extend({object:t.objectApi},{clientId:n._id},n)).$promise.then(function(){})}}]),angular.module("hourlyPjApp").factory("hourlyPj",["$resource",function(t){var e="http://192.168.0.164:3000";return{apiUrl:e,objects:t(e+"/:object/:clientId",{object:"@object",clientId:"@clientId"},{edit:{method:"PUT"}})}}]),angular.module("hourlyPjApp").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="list client-list"><section class="md-whiteframe-z1" ng-repeat="client in clients"><form ng-submit="updateClient(client)"><md-toolbar class="md-hue-2"><div class="md-toolbar-tools" layout=""><i class="fa fa-user"></i><md-input-container flex=""><input type="text" ng-model="client.name"></md-input-container></div></md-toolbar><md-button type="button" class="md-fab md-primary md-save"><h2 class="nomargin">{{client.projects.length | json}}</h2></md-button><md-input-container><label>Note</label> <textarea rows="1" ng-model="client.note"></textarea></md-input-container><md-button type="button" class="md-delete md-raised md-warn" ng-click="deleteClient(client._id)"><i class="fa fa-trash"></i> Delete</md-button></form></section></div><div class="list client-list"><section class="md-whiteframe-z1"><form ng-submit="addClient()"><md-toolbar md-scroll-shrink="" class="md-hue-1"><div class="md-toolbar-tools" layout="" layout-margin=""><i class="fa fa-plus"></i><md-input-container flex=""><input type="text" ng-model="newClient.name" placeholder="Client name"></md-input-container></div></md-toolbar><md-input-container><label>Note</label> <textarea ng-model="newClient.note"></textarea></md-input-container><md-button type="material" class="md-fab md-save"><i class="fa fa-cloud-upload"></i></md-button></form></section></div>'),t.put("app/projects/projects.html",'<div class="list project-list"><section class="md-whiteframe-z1" ng-repeat="client in clients"><form ng-submit="updateClient(client)"><md-toolbar class="md-hue-2" layout="" layout-margin=""><div class="md-toolbar-tools"><i class="fa fa-user fa-2x"></i><md-input-container flex="50"><label>Name</label> <input type="text" ng-model="client.name"></md-input-container><md-input-container flex="30"><label>Amount</label> <input type="text" ng-model="client.amount"></md-input-container></div></md-toolbar><div flex=""><md-input-container><label>Note</label> <textarea rows="1" ng-model="client.note"></textarea></md-input-container></div><md-button type="button" class="md-delete md-raised md-warn" ng-click="deleteClient(client._id)"><i class="fa fa-trash"></i> Delete</md-button></form></section></div><div class="list client-list"><section class="md-whiteframe-z1"><form ng-submit="addClient()"><md-toolbar md-scroll-shrink="" class="md-hue-1"><div class="md-toolbar-tools" layout="" layout-margin=""><i class="fa fa-plus"></i><md-input-container flex=""><input type="text" ng-model="newClient.name" placeholder="Client name"></md-input-container></div></md-toolbar><md-input-container><label>Note</label> <textarea ng-model="newClient.note"></textarea></md-input-container><md-button type="material" class="md-fab md-save"><i class="fa fa-cloud-upload"></i></md-button></form></section></div>'),t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Clients</md-button><md-button href="#/projects" class="md-raised">Projects</md-button><md-button href="#/hours" class="md-raised">Hours</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>')}]);