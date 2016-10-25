var Immutable = require('immutable');

var generate = require('../Generate');

module.exports = Immutable.fromJS([{
    list_name: "Inbox",
    list_id: generate('list_id'),
    immutable: true,
    todos: [] 
}, {
    list_name: 'Important Things',
    list_id: generate('list_id'),
    immutable: false,
    todos: [{
        is_complete: false,
        todo_id: generate('todo_id'),
        title: "Call Jerry about dinner party"
    }, {
        is_complete: false,
        todo_id: generate('todo_id'),
        title: "Email Elaine and ask her for extra sponges"
    }]
}, {
    list_name: 'Less important things',
    list_id: generate('list_id'),
    immutable: false,
    todos: [{
        is_complete: false,
        title: "Ask George where he bought that book",
        todo_id: generate('todo_id')
    }]
}]);
