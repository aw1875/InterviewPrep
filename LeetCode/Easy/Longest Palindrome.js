/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0;
    const hash = new Map();

    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1);
        } else {
            hash.set(s[i], 1);
        }
    }

    for (let [_, val] of hash) {
        if (val % 2 === 0) {
            result += val;
        } else {
            result += val - 1;
        }
    }

    if (result < s.length) {
        result++;
    }

    return result;
};
