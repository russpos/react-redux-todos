var bows = require('bows');
var path = require('path');

module.exports = function logger(filename) {
    return bows(path.basename(filename));
}
