var indexes = {};

module.exports = function generate(indexName) {
    if (!indexes[indexName]) {
        indexes[indexName] = 0;
    }
    return ++indexes[indexName];
}
