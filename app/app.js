'use strict';

var app = angular
  .module('historialApp', [
  ]);

app.controller('MainController', MainController);

function MainController($scope, $http) {
  $http.get('data.json').then(function (result) {
    $scope.plantaciones = result.data;
  })
}
