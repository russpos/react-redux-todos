var React = require('react');

var Todo          = require('components/Todo');
var listFunctions = require('Data/listFunctions');

var TodoList = React.createClass({

    getLists: function getlists() {
        var lists = this.props.lists;
        return lists;
    },

    render: function() {
        var props = this.props;
        var totalCount = 0;
        var completeCount = 0;

        var innards = this.getLists().map(function(list) {
            totalCount += listFunctions.getCountOfTodos(list);
            completeCount += listFunctions.getCountOfCompleteTodos(list);

            var todos = list.get('todos').map(function(todo) {
                return (
                    <Todo
                        onTodoChangeStatus={props.onTodoChangeStatus}
                        list={list}
                        key={todo.get('todo_id')}
                        todo={todo} />
                );
            });

            return (
                <div key={list.get('list_id')}>
                    <b>{list.get('list_name')}</b>
                    {todos}
                </div>
            );
        });

        return (
            <div className="todo-list">
                <h1> {completeCount} of {totalCount}</h1>
                {innards}
            </div>
        );
    }
});

module.exports = TodoList;
