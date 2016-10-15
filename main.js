// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var AppFrame = require('./components/AppFrame');

ReactDOM.render(
  new AppFrame(),
  document.getElementById('example')
);
