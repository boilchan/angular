var indexModule = angular.module('s7.index', []);
indexModule.controller('IndexController', function ($scope) {
    $scope.name = 'Index';
    $scope.msg = 'Welcome to the index page';

});