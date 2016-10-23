var React = require('react');

var Todo = require('./Todo');

var listFunctions = require('../Data/listFunctions');

var TodoList = React.createClass({

    getSections: function getSections() {
        var lists = this.props.lists;
        var currentList = this.props.currentList;
        return lists;
    },

    render: function() {
        var props = this.props;
        var totalCount = 0;
        var completeCount = 0;

        var innards = this.getSections().map(function(section) {
            totalCount += listFunctions.getCountOfTodos(section);
            completeCount += listFunctions.getCountOfCompleteTodos(section);

            var todos = section.get('todos').map(function(todo) {
                return (
                    <Todo
                        onTodoChangeStatus={props.onTodoChangeStatus}
                        key={todo.get('todo_id')}
                        todo={todo} />
                );
            });

            return (
                <div key={section.get('list_id')}>
                    <b>{section.get('list_name')}</b>
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
