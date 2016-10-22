// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var AppFrame = require('./components/AppFrame');

var Redux = require('redux');
var App = require('./App');




ReactDOM.render(
    React.createElement(AppFrame, null),
    document.getElementById('page')
);
