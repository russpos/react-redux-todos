var React = require('react');

var SideBar = require('./SideBar');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

var lists    = require('../Data/lists');
var sections = require('../Data/sections');

var AppFrame = React.createClass({

    render: function() {

        return (
        <div>
            <SideBar lists={lists} currentList={lists.get(0)} />
            <div>
                <AddTodo currentList={lists.get(0)} lists={lists} />
                <TodoList sections={sections} />
            </div>
        </div>
        );
    }

});

module.exports = AppFrame;
