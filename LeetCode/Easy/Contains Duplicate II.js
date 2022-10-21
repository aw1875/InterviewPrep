/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (i - map.get(currentNum) <= k) return true;
        map.set(currentNum, i);
    }
    
    return false;
};
