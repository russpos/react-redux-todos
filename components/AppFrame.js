var React = require('react');

var SideBar = require('./SideBar');

var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

var sections = [{
    title: "Important things",
    section_id: 1,
    todos: [{
        is_complete: false,
        todo_id: 1,
        title: "Call Jerry about dinner party"
    }, {
        is_complete: false,
        todo_id: 2,
        title: "Email Elaine and ask her for extra sponges"
    }]
}, {
    title: "Less important things",
    section_id: 2,
    todos: [{
        is_complete: false,
        title: "Ask George where he bought that book",
        todo_id: 3
    }]
}];

var AppFrame = React.createClass({

    render: function() {

        return (
        <div>
            <SideBar />
            <div>
                <AddTodo sections={sections} />
                <TodoList sections={sections} />
            </div>
        </div>
        );
    }

});

module.exports = AppFrame;
