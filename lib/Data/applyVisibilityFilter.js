var visibilities = require('./visibilities');
var Immutable = require('immutable');

module.exports = function applyVisibilityFilter(lists, visibilityMode, visibilityArg) {
    console.log('applyVisibilityFilter', visibilityMode, visibilityArg);
    if (visibilityMode === visibilities.MODE_ALL) {
        return lists;
    }
    if (visibilityMode === visibilities.MODE_LIST) {
        console.log('list mode');
        var filteredLists = [];
        var rawLists = lists.toJS();

        for (var i in rawLists) {
            if (rawLists[i].list_id === visibilityArg) {
                filteredLists.push(rawLists[i]);
            }
        }
        return Immutable.fromJS(filteredLists);
    }
    console.log('other');

    return lists;
};
