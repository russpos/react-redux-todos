var actionTypes = require('../Actions');
var generate = require('../Generate');
var listFunctions = require('../Data/listFunctions');
var Immutable = require('immutable');

var lists = require('../Data/lists');

module.exports = function Reducer(state, action) {
    if (state === undefined) {
        state = lists;
    }

    console.log("Action fired:", action);

    switch (action.type) {
        case actionTypes.ADD_TODO:
            // Just assume inbox for now
            var listIndex = listFunctions.findListIndexByListId(state, action.list_id);
            var size = state.get(listIndex).get('todos').size;
            var newTodo = {
                title: action.text,
                is_complete: false,
                todo_id: generate('todo_id')
            };
            var newState = state.setIn([listIndex, 'todos', size], Immutable.fromJS(newTodo));
            return newState;

        case actionTypes.TOGGLE_TODO:
            var todoIndex = false;
            var listIndex = false;
            state.forEach(function(list, curListIndex) {
                if (todoIndex !== false) {
                    return;
                }
                todoIndex = listFunctions.getTodoIndexByTodoId(list, action.todo_id);
                if (todoIndex !== false) {
                    listIndex = curListIndex;
                }
            });

            if (todoIndex === false) {
                return state;
            }
            return state.setIn([listIndex, 'todos', todoIndex, 'is_complete'], action.is_complete);

    }
    return state;
};
