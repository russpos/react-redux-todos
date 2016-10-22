var React = require('react');

var Todo = require('./Todo');

var TodoList = React.createClass({

    getSections: function getSections() {
        var lists = this.props.lists;
        var currentList = this.props.currentList;
        return lists;
    },

    render: function() {
        var innards = this.getSections().map(function(section) {
            var todos = section.get('todos').map(function(todo) {
                return (
                    <Todo key={todo.get('todo_id')} todo={todo} />
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
                {innards}
            </div>
        );
    }
});

module.exports = TodoList;
