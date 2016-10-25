module.exports = {

    getTodoIndexByTodoId: function getTodoIndexByTodoId(list, todo_id) {
        var todoIndex = false;
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
    },

    findListIndexByListId: function findListIndex(state, list_id) {
        var listIndex = false;
        state.forEach(function(curList, curListIndex) {
            if (curList.get('list_id') === list_id) {
                listIndex = curListIndex;
            }
        });
        return listIndex;
    }

};
