var React = require('react');

var Todo = require('./Todo');

var TodoList = React.createClass({

    render: function() {
        var innards = this.props.sections.map(function(section) {
            var todos = section.get('todos').map(function(todo) {
                return (
                    <Todo key={todo.get('todo_id')} todo={todo} />
                );
            });

            return (
                <div key={section.get('section_id')}>
                    <b>{section.get('title')}</b>
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
