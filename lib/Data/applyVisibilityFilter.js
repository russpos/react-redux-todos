var Immutable = require('immutable');

var visibilities  = require('Data/visibilities');
var log           = require('Logger')(__filename);

module.exports = function applyVisibilityFilter(lists, visibilityMode, visibilityArg) {
    log('applyVisibilityFilter', { mode: visibilityMode, arg: visibilityArg });
    if (visibilityMode === visibilities.MODE_ALL) {
        return lists;
    }
    if (visibilityMode === visibilities.MODE_LIST) {
        log('list mode');
        var filteredLists = [];
        var rawLists = lists.toJS();

        for (var i in rawLists) {
            if (rawLists[i].list_id === visibilityArg) {
                filteredLists.push(rawLists[i]);
            }
        }
        return Immutable.fromJS(filteredLists);
    }
    log('other');

    return lists;
};
