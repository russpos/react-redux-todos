var AppFrame = require('./AppFrame');
var ReactRedux = require('react-redux');
var createAction = require('../ActionCreators');


var mapStateToProps = function(state) {
    return {
        lists: state.todos.get('lists'),
        visibility: state.todos.get('visibility')
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        onTodoAdd: function(todoData) {
            dispatch(createAction.addTodo(todoData.title, todoData.list_id));
        },
        onTodoChangeStatus: function onTodoChangeStatus(todoId, isComplete) {
            dispatch(createAction.toggleTodo(todoId, isComplete));
        }

    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AppFrame);
