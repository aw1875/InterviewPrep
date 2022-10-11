/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }

    return nums[0] !== 0 ? 0 : nums[nums.length - 1] + 1;
};
