var listModule = angular.module('s7.ml.list', ['ngRoute', 's7.ml.model']);
listModule.controller('ListController', function ($scope, $routeParams, modelService) {
    $scope.name = 'list';
    $scope.routeParams = $routeParams;
});