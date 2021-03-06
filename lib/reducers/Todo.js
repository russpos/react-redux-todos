var Immutable = require('immutable');

var actionTypes   = require('Actions');
var generate      = require('Generate');
var initialState  = require('Data/initialState');
var listFunctions = require('Data/listFunctions');
var log           = require('Logger')(__filename);

module.exports = function Reducer(state, action) {
    if (state === undefined) {
        state = initialState;
    }

    switch (action.type) {
        case actionTypes.SET_VISIBILITY:
            state = state.setIn(['visibility', 'mode'], action.mode);
            state = state.setIn(['visibility', 'arg'], action.arg);
            log('New visibility state:', state.get('visibility').toJS()); 
            return state;

        case actionTypes.ADD_TODO:
            // Just assume inbox for now
            var listIndex = listFunctions.findListIndexByListId(state.get('lists'), action.list_id);
            var size = state.get('lists').get(listIndex).get('todos').size;
            var newTodo = {
                title: action.text,
                is_complete: false,
                todo_id: generate('todo_id')
            };
            state = state.setIn(['lists', listIndex, 'todos', size], Immutable.fromJS(newTodo));
            return state;

        case actionTypes.TOGGLE_TODO:
            var todoIndex = false;
            var listIndex = false;
            state.get('lists').forEach(function(list, curListIndex) {
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
            return state.setIn(['lists', listIndex, 'todos', todoIndex, 'is_complete'], action.is_complete);

    }
    return state;
};
