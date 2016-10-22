var Redux = require('redux');
var App   = require('./App');
var lists = require('./Data/lists');

var store = Redux.createStore(App, {});

module.exports = store;
