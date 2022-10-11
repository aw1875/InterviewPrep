/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const result = [pref[0]];
    if (pref.length === 1) return result;


    for (let i = 1; i < pref.length; i++) {
        result.push(pref[i] ^ pref[i - 1]);
    }

    return result;
};
