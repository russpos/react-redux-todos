var actions = require('Actions');

module.exports = {

    addTodo: function addTodo(text, list_id) {
        return {
            type: actions.ADD_TODO,
            text: text,
            list_id: list_id
        };
    },

    toggleTodo: function toggleTodo(todo_id, is_complete) {
        return {
            type: actions.TOGGLE_TODO,
            todo_id: todo_id,
            is_complete: is_complete
        };
    },

    setVisibilityMode: function setVisibilityMode(mode, arg) {
        return {
            type: actions.SET_VISIBILITY,
            mode: mode,
            arg: arg
        };
    }
};
