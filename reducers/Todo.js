var actionTypes = require('../Actions');
var generate = require('../Generate');
var Immutable = require('immutable');

var lists = require('../Data/lists');

module.exports = function Reducer(state, action) {
    if (state === undefined) {
        state = lists;
    }

    switch (action.type) {
        case actionTypes.ADD_TODO:
            // Just assume inbox for now
            var size = state.get(0).get('todos').size;
            var newTodo = {
                title: action.text,
                is_complete: false,
                todo_id: generate('todo_id')
            };
            var newState = state.setIn([0, 'todos', size], Immutable.fromJS(newTodo));
            return newState;
    }
    return state;
};
