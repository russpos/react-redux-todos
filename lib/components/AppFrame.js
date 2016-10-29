var React = require('react');

var AddTodo  = require('components/AddTodo');
var SideBar  = require('components/SideBar');
var TodoList = require('components/TodoList');

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
            <SideBar
                onFilterLinkClick={this.props.onFilterLinkClick}
                lists={lists}
                visibilityMode={this.props.visibility.get('mode')}
                visibilityArg={this.props.visibility.get('arg')}
            />
            <div>
                <AddTodo
                    onTodoAdd={this.props.onTodoAdd}
                    currentList={lists.get(0)}
                    lists={lists}
                />
                <TodoList
                    onTodoChangeStatus={this.props.onTodoChangeStatus}
                    lists={this.props.displayedItems}/>
            </div>
        </div>
        );
    }

});

module.exports = AppFrame;
