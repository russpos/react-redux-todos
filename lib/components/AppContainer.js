var AppFrame = require('./AppFrame');
var ReactRedux = require('react-redux');
var createAction = require('../ActionCreators');
var applyVisibilityFilter = require('../Data/applyVisibilityFilter');


var mapStateToProps = function(state) {
    var visibility = state.todos.get('visibility');
    var displayedItems = applyVisibilityFilter(state.todos.get('lists'),
        visibility.get('mode'),
        visibility.get('arg')
    );

    return {
        lists: state.todos.get('lists'),
        displayedItems: displayedItems,
        visibility: visibility
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        onTodoAdd: function(todoData) {
            dispatch(createAction.addTodo(todoData.title, todoData.list_id));
        },

        onTodoChangeStatus: function onTodoChangeStatus(todoId, isComplete) {
            dispatch(createAction.toggleTodo(todoId, isComplete));
        },

        onFilterLinkClick: function onFilterLinkClick(visibilityMode, visibilityArg) {
            dispatch(createAction.setVisibilityMode(visibilityMode, visibilityArg));
        }

    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AppFrame);
