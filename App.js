var Redux = require('redux');
var todoReducer = require('./reducers/Todo');

var app = Redux.combineReducers({
    todoReducer: todoReducer
});
