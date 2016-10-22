var Immutable = require('immutable');

module.exports = Immutable.fromJS([{
    list_name: "Inbox",
    list_id: 0,
    immutable: true
}, {
    list_name: 'Important Things',
    list_id: 100,
    immutable: false
}, {
    list_name: 'Less important things',
    list_id: 200,
    immutable: false
}]);
