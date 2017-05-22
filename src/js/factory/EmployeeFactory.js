management.factory('EmployeeFactory', function ($http) {

    var urlBase = 'http://localhost:5500/'
    var dataFactory = {};

    dataFactory.GetEmployeeById = function () {
        return $http.get(urlBase + 'GetEmployeeById').success(function (response) {
            return response.data;
        });
    }

    dataFactory.UpdateEmployee = function (data) {
        return $http.post(urlBase + 'UpdateEmployee', data).success(function (response) {
            return response;
        });
    }


    dataFactory.InsertEmployee = function (data) {
        return $http.post(urlBase + 'InsertEmployee', data).success(function (response) {
            return response;
        });
    }

    return dataFactory;
});