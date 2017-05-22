management.controller('NavController', function ($scope, $location, $route) {

    $scope.$route = $route;

    $scope.changeTab = function (tab) {
        $location.path(tab);
    };

});