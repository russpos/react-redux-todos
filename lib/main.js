// main.js
var React = require('react');
var ReactDOM = require('react-dom');


var AppContainer = require('components/AppContainer');
var createAction = require('ActionCreators');

var Store = require('Store');

ReactDOM.render(
    React.createElement(AppContainer, {
        store: Store
    }),
    document.getElementById('page')
);

var unsubscribe = Store.subscribe(function logger() {
});
