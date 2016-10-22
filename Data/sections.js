var Immutable = require('immutable');

module.exports = Immutable.fromJS([{
    title: "Inbox",
    section_id: 0,
    todos: []  
}, {
    title: "Important things",
    section_id: 1,
    todos: [{
        is_complete: false,
        todo_id: 1,
        title: "Call Jerry about dinner party",
        list_id: 100
    }, {
        is_complete: false,
        todo_id: 2,
        title: "Email Elaine and ask her for extra sponges",
        list_id: 100
    }]
}, {
    title: "Less important things",
    section_id: 2,
    todos: [{
        is_complete: false,
        title: "Ask George where he bought that book",
        todo_id: 3,
        list_id: 200
    }]
}]);

