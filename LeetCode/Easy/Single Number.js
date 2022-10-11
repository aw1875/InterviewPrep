/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();

    nums.forEach((i) => {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    });

    for (let [key, val] of map) {
        if (val === 1) return key;
    }
};
