/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const input = s.replace(/[\W_]+/g, '').toLowerCase();
    return input === input.split('').reverse().join('');
};
