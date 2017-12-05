var detailModule = angular.module('s7.detail', []);
detailModule.controller('DetailController',function($scope,$routeParams){
    $scope.name = 'detail';
    $scope.msg = 'this is detail page:' + $routeParams.id;
});