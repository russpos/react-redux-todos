var actions = require('./Actions');
module.exports = {

    addTodo: function addTodo(text) {
        return {
            type: actions.ADD_TODO,
            text: text
        };
    },

    toggleTodo: function toggleTodo(todo_id, is_complete) {
        return {
            type: actions.TOGGLE_TODO,
            todo_id: todo_id,
            is_complete: is_complete
        };
    }
};
