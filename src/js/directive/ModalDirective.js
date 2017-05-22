management.directive('modalDirective', function () {
    return {
        templateUrl: 'templates/directiveTemplate/modalDirective.html',
        link: function (scope, element, attr) {

            var teste = scope.Role;

            scope.ConfirmationModal = function (scope) {
                var t = scope;
                $('.modalDirective').modal('toggle');
            }
            scope.CancelModal = function () {
                //dialog.close();
            }

            element.bind('click', function (event, scope) {
                //var teste = scope.Role;
                //console.log('click - directive');
            });
        }
    };
});