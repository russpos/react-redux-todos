var React = require('react');

var SideBar = require('./SideBar');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

var AppFrame = React.createClass({

    getLists: function getLists() {
        return this.props.lists;
    },

    getCurrentList: function getCurrentList() {
        return this.props.currentList;
    },

    render: function() {
        var lists = this.getLists();
        var currentList = this.getCurrentList();

        return (
        <div>
            <SideBar lists={lists} currentList={lists.get(0)} />
            <div>
                <AddTodo
                    onTodoAdd={this.props.onTodoAdd}
                    currentList={lists.get(0)}
                    lists={lists}
                />
                <TodoList
                    onTodoChangeStatus={this.props.onTodoChangeStatus}
                    currentList={lists.get(0)}
                    lists={lists} />
            </div>
        </div>
        );
    }

});

module.exports = AppFrame;
