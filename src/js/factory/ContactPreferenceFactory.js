management.factory('ContactPreferenceFactory', function ($http) {

    var urlBase = 'http://localhost:5500/';
    var dataProvider = {};

    dataProvider.GetllContactPreferences = function () {
        return $http.get(urlBase + 'GetllContactPreferences').success(function (response) {
            return response;
        });
    };

    return dataProvider;
});