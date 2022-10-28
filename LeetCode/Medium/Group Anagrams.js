/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs.length) return [];
    const map = new Map();

    for (const s of strs) {
        const ss = s.split('').sort((a, b) => a.localeCompare(b)).join('');
        const curr = map.get(ss) || [];
        curr.push(s);
        map.set(ss, curr);
    }

    return [...map.values()];
};
