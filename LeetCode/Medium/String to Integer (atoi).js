/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const MAX = 2147483648;
    const num = Number(s.trimLeft().match(/^[-\+]?\d+/));
    if (num > (MAX - 1)) return MAX - 1;
    return num < (MAX * -1) ? MAX * -1 : num;
};
