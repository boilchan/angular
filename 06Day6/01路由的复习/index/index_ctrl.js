void function () {
    var indexModule = angular.module('s7.index', []);
    indexModule.controller('IndexController', function ($scope) {
        $scope.name = 'index';
        $scope.msg = 'this is index page'
    });
}();