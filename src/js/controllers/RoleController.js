management.controller('RoleController', function ($scope, $rootScope, $filter, ModelFactory, RoleFactory, ListRoles, ngDialog, AlertService) {

    Init();

    function Init() {
        $scope.Title = 'Role Controller';
        InitializeRole();

        angular.merge($scope.ListRoles, ListRoles.data);

    }

    function InitializeRole() {
        $scope.Role = ModelFactory.Role();
    }

    $scope.ConfirmationModal = function (RoleID) {
        deleteRole(RoleID);
    }

    $scope.clickToOpen = function () {
        ngDialog.open({ template: 'templates/directiveTemplate/modalDirective.html', className: 'ngdialog-theme-default' });
    };

    function deleteRole(RoleID) {
        //RoleFactory.DeleteRole(RoleID).then(function (response) {
        //});
        console.log(RoleID);
    };

    $scope.EditRole = function (data, index) {
        $scope.Role = {
            RoleID: data.RoleID,
            Name: data.Name,
            Index: index
        }
    };

    $scope.DeleteRole = function (RoleID) {
        RoleFactory.DeleteRole(RoleID).then(function (response) {
        });
    };

    $scope.counter = 0;

    $scope.$watch('Role.RoleID', function (newValue, oldValue) {
        if (newValue != oldValue) {
            $scope.counter = $scope.counter + 1;
            console.log($scope.counter);
        }
    });

    $scope.SaveRole = function () {

        if ($scope.formRole.$invalid) {
            AlertService.danger('Fill out all the fields!');
            return;
        }

        RoleFactory.UpdateRole($scope.Role).then(function (response) {
            if (response.status === 200) {
                AlertService.success(response.data.message);
                $scope.ListRoles[$scope.Role.Index] = $scope.Role
                InitializeRole();
            }
        });
    };
    $scope.SaveAllRole = function () {

        var roles = [];
        angular.forEach($scope.ListRoles, function (data, key) {
            if (data.Active === 1) {
                roles.push(data);
            }
        }, roles);
        console.log(roles);

        RoleFactory.UpdateActiveRole(roles).then(function (response) {
            if (response.status === 200) {
                AlertService.success(response.data.message);
                //$scope.ListRoles[$scope.Role.Index] = $scope.Role
                //$scope.InitializeRole();
            }
        });
    }


});