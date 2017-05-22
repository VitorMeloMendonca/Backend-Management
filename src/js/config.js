'use strict';

var management = angular.module('Management', ['ngRoute', 'ngAnimate', 'ngDialog']);

management.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            activetab: 'home'
        })
        .when('/Employee',
        {
            templateUrl: 'templates/employee.html',
            controller: 'EmployeeController',
            activetab: 'employee',
            resolve: {
                CountriesData: function (CountryFactory) {
                    return CountryFactory.GetAllCountries();
                },
                ContactPreferencesData: function (ContactPreferenceFactory) {
                    return ContactPreferenceFactory.GetllContactPreferences();
                }
            }
        })
        .when('/Employer',
        {
            templateUrl: 'templates/employer.html',
            controller: 'EmployerController',
            activetab: 'employer'
        })
        .when('/Technology',
        {
            templateUrl: 'templates/technology.html',
            controller: 'TechnologyController',
            activetab: 'technology'
        })
        .when('/Opportunity',
        {
            templateUrl: 'templates/opportunity.html',
            controller: 'OpportunityController',
            activetab: 'opportunity'
        })
        .when('/Role',
        {
            templateUrl: 'templates/role.html',
            controller: 'RoleController',
            activetab: 'role',
            resolve: {
                ListRoles: function (RoleFactory) {
                    return RoleFactory.GetAllRoles();
                }
            }
        })
        .otherwise('/');

    $httpProvider.interceptors.push('HttpInterceptorConfig');
});