management.factory('RoleFactory', function ($http) {

    var dataProvider = {};

    dataProvider.GetAllRoles = function () {
        return $http.get('http://localhost:5500/SelectRole').success(function (response) {
            return response;
        });
    };

    dataProvider.UpdateRole = function (data) {
        return $http.post('http://localhost:5500/UpdateRole', data)
            .success(function (response, status, header, config) {
                return response;
            })
            .error(function (data, status, header, config) {

            });
    };

    dataProvider.UpdateActiveRole = function (data) {
        return $http.post('http://localhost:5500/UpdateActiveRole', data)
            .success(function (response, status) {
                return response;
            })
            .error(function (data, status, header, config) {

            });
    };



    dataProvider.DeleteRole = function (data) {
        return $http.post('http://localhost:5500/DeleteRole', data).success(function (response) {
            return response;
        })
    }

    return dataProvider;
});