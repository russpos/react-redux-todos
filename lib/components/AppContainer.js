var AppFrame = require('./AppFrame');
var ReactRedux = require('react-redux');
var createAction = require('../ActionCreators');


var mapStateToProps = function(state) {
    return {
        lists: state.todos,
        currentList: state.todos.get(0)
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        onTodoAdd: function(todoData) {
            debugger;
            dispatch(createAction.addTodo(todoData.title));
        },
        onTodoChangeStatus: function onTodoChangeStatus(todoId, isComplete) {
            dispatch(createAction.toggleTodo(todoId, isComplete));
        }

    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AppFrame);
