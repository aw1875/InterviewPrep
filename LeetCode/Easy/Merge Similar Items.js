/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map = new Map();

    items1.concat(items2).forEach(([v, w]) => {
        if (map.has(v)) {
            map.set(v, map.get(v) + w);
        } else {
            map.set(v, w);
        }
    });

    return Array.from(map, ([v, w]) => [v, w]).sort(([v1, w1], [v2, w2]) => v1 - v2);
};
