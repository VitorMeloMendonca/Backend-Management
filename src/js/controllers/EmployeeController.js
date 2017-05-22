management.controller('EmployeeController', function ($scope, EmployeeFactory, CountriesData, ContactPreferencesData, AlertService) {
    $scope.Title = 'Employee Controller';
    $scope.CountryList = CountriesData.data;
    $scope.ContactPreferencesList = ContactPreferencesData.data;

    cleanEmployee();

    function cleanEmployee() {
        $scope.Employee = {
            FirstName: null,
            LastName: null,
            Address: null,
            Phone: null,
            Email: null,
            PostCode: null,
            Country: 1,
            ContactPreference: 1
        }
    }


    $scope.GetEmployeeById = function (EmployeeID) {
        EmployeeFactory.GetEmployeeById(EmployeeID).then(function (response) {

        });
    }

    $scope.SaveEmployee = function () {
        EmployeeFactory.InsertEmployee($scope.Employee).then(function (response) {

            AlertService.success(response.data.message)            
            cleanEmployee();
        });
    }

    $scope.CleanEmployee = function () {
        cleanEmployee();
    }
});