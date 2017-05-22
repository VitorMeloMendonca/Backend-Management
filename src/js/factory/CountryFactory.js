management.factory('CountryFactory', function ($http) {

var urlBase = 'http://localhost:5500/';
    var dataProvider = {};

    dataProvider.GetAllCountries = function () {
        return $http.get(urlBase + 'GetAllCountries').success(function (response) {
            return response;
        });
    };

    return dataProvider;
});