module.exports = {

    getTodoIndexByTodoId: function getTodoIndexByTodoId(list, todo_id) {
        var todoIndex;
        list.get('todos').forEach(function(todo, index) {
            if (todo.get('todo_id') === todo_id) {
                todoIndex = index;
            }
        });
        return todoIndex;
    },

    getCountOfTodos: function getCountOfTodos(list) {
        return list.get('todos').size;
    },

    getCompleteTodos: function getCompleteTodos(list) {
        return list.get('todos').filter(function(todo) {
            return !!todo.get('is_complete');
        });
    },

    getCountOfCompleteTodos: function getCountOfCompleteTodos(list) {
        return this.getCompleteTodos(list).size;
    }

};
