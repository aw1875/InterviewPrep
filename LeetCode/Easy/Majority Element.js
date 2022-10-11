/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const mid = nums.length / 2;

    nums.forEach((i) => {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1);
        }
    });

    for (const [k, v] of map) {
        if (v >= mid) return k;
    }
};
