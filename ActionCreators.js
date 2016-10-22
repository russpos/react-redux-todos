var actions = require('./Actions');
module.exports = {

    addTodo: function addTodo(text) {
        return {
            type: actions.ADD_TODO,
            text: text
        };
    },

    toggleTodo: function toggleTodo(todo_id) {
        return {
            type: actions.TOGGLE_TODD,
            todo_id: todo_id
        };
    }
};
