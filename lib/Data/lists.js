var Immutable = require('immutable');

var generate = require('../Generate');

var importantListId = generate('list_id');
var lessListId = generate('list_id');
var inboxListId = generate('list_id');

module.exports = Immutable.fromJS([{
    list_name: "Inbox",
    list_id: inboxListId,
    immutable: true,
    todos: [] 
}, {
    list_name: 'Important Things',
    list_id: importantListId,
    immutable: false,
    todos: [{
        is_complete: false,
        todo_id: generate('todo_id'),
        title: "Call Jerry about dinner party",
        list_id: importantListId
    }, {
        is_complete: false,
        todo_id: 2,
        title: "Email Elaine and ask her for extra sponges",
        list_id: importantListId
    }]
}, {
    list_name: 'Less important things',
    list_id: lessListId,
    immutable: false,
    todos: [{
        is_complete: false,
        title: "Ask George where he bought that book",
        todo_id: 3,
        list_id: lessListId
    }]
}]);
