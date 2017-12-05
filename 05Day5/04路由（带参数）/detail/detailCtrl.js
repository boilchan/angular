var detailModule = angular.module('s7.detail', []);
// $routeParams 路由参数
detailModule.controller('DetailController', function ($scope,$route,$routeParams) {
    $scope.id = $routeParams.userid;

    $scope.msg = '你好用户' + $scope.id;

});