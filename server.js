var express = require('express');
var app = require('./app');
var connection = require('./connection');

connection.authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  }).catch(err => {
    console.error('Unable to connect to MySQL');
  });

app.listen(8000, () => {
  console.log('http://localhost:8000');
})