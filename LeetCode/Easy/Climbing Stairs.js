/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;
    let b = 1;

    while (n--) {
        a = (b += a) - a
    }

    return a
};
