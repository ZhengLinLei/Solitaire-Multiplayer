const express = require('express');

// GET CONFIG
const config = require('./server/config');
// CALL DATABASE
// require('./server/database'); NO DATABASE REQUIRED BUT WILL BE NEEDED IN THE FUTURE

// GENERATE SERVER
const app = config(express());


// CALL SERVER
app.listen(app.get('port') , ()=> `Port in ${app.get('port')}`);