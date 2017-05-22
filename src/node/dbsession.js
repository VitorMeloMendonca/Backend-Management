'use strict';

//Module export
module.export = {};

var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

// Setup database:
var dbFile = './management.db';
var dbExists = fs.existsSync(dbFile);

// Initialize the database:
var db = new sqlite3.Database(dbFile);



db.serialize(function () {

    // SELECT
    module.exports.SelectRole = function (roleID, name, callback) {
        db.all('SELECT * FROM Role ORDER BY Name', callback);
    };

    module.exports.SelectTechnology = function (technologyID, name, callback) {
        db.all('SELECT * FROM Technology', callback);
    };

    module.exports.GetAllCountries = function (countryID, name, callback) {
        db.all('SELECT * FROM Country', callback);
    };

    module.exports.GetllContactPreferences = function (contactPreferenceID, name, callback) {
        db.all('SELECT * FROM ContactPreference', callback);
    };

    // Insert some data using a statement:
    module.exports.InsertEmployee = function (firstName, lastName, phone, email, address, postCode, countryID, contactPreferenceID, callback) {
        var statement = db.prepare('INSERT INTO `Employee` (`FirstName`, `LastName`, `Phone`,`Email`, `Address`, `PostCode`,`CountryID`, `ContactPreferenceID`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        statement.run(firstName, lastName, phone, email, address, postCode, countryID, contactPreferenceID);
        statement.finalize(callback);
    };

    module.exports.InsertEmployer = function (name, phone, address) {
        var statement = db.prepare('INSERT INTO `Employer` (`Name`, `Phone`, `Adress`) VALUES (?, ?, ?)');
        statement.run(name, phone, address);
        statement.finalize();
    };

    module.exports.InsertOpportunity = function (name, description, creationDate, availableDate) {
        var statement = db.prepare('INSERT INTO `Opportunity` (`Name`, `Description`, `CreationDate`,`AvailableDate`) VALUES (?, ?, ?, ?)');
        statement.run(name, description, creationDate, availableDate);
        statement.finalize();
    };

    module.exports.InsertOpportunityEmployee = function (employeeID, opportunityID, callback) {
        var statement = db.prepare('INSERT INTO `OpportunityEmployee` (`EmployeeID`, `OpportunityID`) VALUES (?, ?)');
        statement.run(employeeID, opportunityID);
        statement.finalize(callback);
    };

    module.exports.InsertRole = function (name, callback) {
        var statement = db.prepare('INSERT INTO `Role` (`Name`) VALUES (?)');
        statement.run(name);
        statement.finalize(callback);

    };

    module.exports.InsertTechnology = function (name, active, callback) {
        var statement = db.prepare('INSERT INTO `Technology` (`Name`, `Active`) VALUES (?, ?)');
        statement.run(name, active);
        statement.finalize(callback);
    };

    //UPDATE
    module.exports.UpdateRole = function (data, callback) {
        var statement = db.prepare('UPDATE Role SET Name = ? WHERE RoleID = ?');
        statement.run(data.Name, data.RoleID);
        statement.finalize(callback);
    };

    module.exports.UpdateActiveRole = function (data, callback) {
        var statement = db.prepare('UPDATE Role SET Active = ? WHERE RoleID = ?');

        for (var i = 0; i < data.length; i++) {
            var active = data.Active == true ? 1 : 0;
            console.log('Active: ' + active);
            statement.run(data.RoleID, active);
        }

        statement.finalize(callback);
    };

    //DELETE
    module.exports.DeleteRole = function (roleID, callback) {
        var statement = db.prepare('DELETE FROM Role WHERE RoleID = ?');
        statement.run(roleID);
        statement.finalize(callback);
    };

});




// Close the database:
//db.close();


