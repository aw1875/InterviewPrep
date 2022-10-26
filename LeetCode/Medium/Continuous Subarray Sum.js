/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const mods = new Set();
    let curr = 0, prev = 0;

    for (const n of nums) {
        curr += n;

        if (mods.has(curr % k)) return true;
        curr = curr % k;
        mods.add(prev);
        prev = curr;
    }

    return false;
};
