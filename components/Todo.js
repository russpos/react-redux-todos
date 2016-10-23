var React = require('react');

var Todo = React.createClass({

    onCheckBoxChange: function onCheckBoxChange(event) {
        var isComplete = !!event.target.checked;
        this.props.onTodoChangeStatus(this.props.todo.get('todo_id'), isComplete);
    },

    render: function() {
        var checked   = (this.props.todo.get('is_complete')) ? true : false;
        var textClass = (this.props.todo.get('is_complete')) ? 'todo complete' : 'todo' ;
        return (
            <div className={textClass}>
                <input
                    type="checkbox"
                    onChange={this.onCheckBoxChange}
                    defaultChecked={checked}
                />
                {this.props.todo.get('title')}
            </div>
        );
    }
});

module.exports = Todo;
