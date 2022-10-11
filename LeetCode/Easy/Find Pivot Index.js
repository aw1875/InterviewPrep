/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        let right = sum - left - nums[i];
        if (left === right) return i;
        left += nums[i];
    }

    return -1;
};
