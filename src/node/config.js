'use strict';

var express = require('express');
var app = express();
const http = require('http');
const dbSession = require('./dbsession.js');

const hostname = 'localhost';
const port = 5500;

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/GetAllCountries', function (req, res) {
  dbSession.GetAllCountries(null, null, function (err, rows) {
    res.send(rows);
  });
});

app.get('/GetllContactPreferences', function (req, res) {
  dbSession.GetllContactPreferences(null, null, function (err, rows) {
    res.send(rows);
  });
});

app.get('/SelectRole', function (req, res) {
  dbSession.SelectRole(null, null, function (err, rows) {
    res.send(rows);
  });
});


app.post('/UpdateRole', function (req, res) {
  dbSession.UpdateRole(req.body, function (err, rows) {
    if (!err)
      res.send(200, { message: "The role was updated!" });
    else
      res.send(err);
  });
});

app.post('/UpdateActiveRole', function (req, res) {
  console.log('outside: ' + req.body[0].Name);
  dbSession.UpdateActiveRole(req.body, function (err, rows) {
    if (!err)
      res.send(200, { message: "The role(s) was updated!" });
    else
      res.send(err);
  });
});




app.post('/InsertRole', function (req, res) {
  console.log('Insert');
  dbSession.UpdateRole(req.body.Name, function (err, rows) {
    if (!err)
      res.send(200, { message: "The role was inserted!" });
  });
});


app.post('/DeleteRole', function (req, res) {
  console.log('DELETE');
  dbSession.UpdateRole(req.body.RoleID, function (err, rows) {
    if (!err)
      res.send('Role deleted with success!');
  });
});

app.post('/InsertEmployee', function (req, res) {
  dbSession.InsertEmployee(req.body.FirstName, req.body.LastName, req.body.Phone, req.body.Email, req.body.Address, req.body.PostCode, req.body.Country.CountryID, req.body.ContactPreference.ContactPreferenceID, function (err, rows) {
    if (!err)
      res.send(200, { message: "The employee was inserted!" });
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log('Listening on port 5500');
  }
});
