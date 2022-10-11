/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let left = 0;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[i]);
        result = Math.max(result, charSet.size);
    }

    return result;
};
