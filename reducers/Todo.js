var actionTypes = require('../Actions');

module.exports = function Reducer(state, action) {
    var process = function(a) { return a; };
    console.log("REDUCER TRIGGERED", action);
    switch (action.type) {
        case actionTypes.ADD_TODO:
            process = function ADD_TODO(state, action) {
            };

    }
    return process(state, action);
};
