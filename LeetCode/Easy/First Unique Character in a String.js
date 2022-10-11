/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const unique = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!unique.has(s[i])) unique.set(s[i], 1);
        else unique.set(s[i], unique.get(s[i]) + 1);
    }

    for (const [k, v] of unique) {
        if (v === 1) return s.indexOf(k);
    }

    return -1;
};
