// Response based on discussions
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    const map = new Map();

    const traverse = (index, lastChar, last, k) => {
        if (k < 0) return Infinity;
        if (index >= s.length) return 0;

        const key = `${index}#${lastChar}#${last}#${k}`;
        if (key in map) return map[key];

        if (s[index] === lastChar) {
            const counter = [1, 9, 99].includes(last) ? 1 : 0;
            map[key] = counter + traverse(index + 1, lastChar, last + 1, k);
        } else {
            const keep = 1 + traverse(index + 1, s[index], 1, k);
            const del = traverse(index + 1, lastChar, last, k - 1);
            map[key] = Math.min(keep, del);
        }

        return map[key];
    }

    return traverse(0, '', 0, k);
};
