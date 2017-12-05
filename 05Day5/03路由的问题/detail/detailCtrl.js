var detailModule = angular.module('s7.detail', []);
// $routeParams 路由参数
detailModule.controller('DetailController', function ($scope,$route,$routeParams) {
    $scope.name = 'Detail';
    $scope.msg = 'Welcome to the detail page';
    window.route = $route;
    console.log($routeParams);
});