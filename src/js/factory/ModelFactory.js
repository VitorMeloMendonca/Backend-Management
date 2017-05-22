management.factory('ModelFactory', function () {

    var dataFactory = {};

    dataFactory.Role = function () {
        return angular.extend({
            RoleID: 0,
            Active: 1,
            Name: null,
            Index: null
        });
    }

    return dataFactory;
});