var React = require('react');

var Todo = React.createClass({

    render: function() {
        var checked   = (this.props.todo.is_complete) ? true : false;
        var textClass = (this.props.todo.is_complete) ? 'complete' : '' ;
        return (
            <div className="todo {textClass}">
                <input type="checkbox" defaultChecked={checked} />
                {this.props.todo.title}
            </div>
        );
    }
});

module.exports = Todo;
