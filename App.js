var Redux = require('redux');
var todoReducer = require('./reducers/Todo');

module.exports = Redux.combineReducers({
    todos: todoReducer
});
