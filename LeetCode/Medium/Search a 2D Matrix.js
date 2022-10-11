/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return matrix.flat().findIndex((i) => i === target) !== -1 ? true : false;
};
