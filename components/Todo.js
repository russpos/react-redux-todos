var React = require('react');

var Todo = React.createClass({

    render: function() {
        var checked   = (this.props.todo.get('is_complete')) ? true : false;
        var textClass = (this.props.todo.get('is_complete')) ? 'todo complete' : 'todo' ;
        return (
            <div className={textClass}>
                <input type="checkbox" defaultChecked={checked} />
                {this.props.todo.get('title')}
            </div>
        );
    }
});

module.exports = Todo;
