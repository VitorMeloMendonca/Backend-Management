management.directive('alert', function (AlertService) {
    return {
        restrict: 'AE',
        link: function (scope, e, a, ctl) {
            scope.alert = AlertService.alertObj;
        },
        template: '<div class="alert" ng-class="alert.type" ng-show="alert.show">{{alert.msg}}</div>'
    };
});