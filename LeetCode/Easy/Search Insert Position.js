/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let targetIndex = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === target) {
            targetIndex = i;
            break;
        }

        if (nums[i - 1] < target) {
            targetIndex = i;
        }
    }

    return nums[nums.length - 1] < target ? nums.length : targetIndex;
};
