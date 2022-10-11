/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let j = 0
    for (let i = x; i >= 1; i = Math.floor(i / 10)) {
        j = (j * 10) + (i % 10)
    }

    return j === x
};
