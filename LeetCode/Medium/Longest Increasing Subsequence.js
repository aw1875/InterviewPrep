/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let minIndex = Math.min(...nums);
    let maxValue = Math.max(...nums);

    const subsequence = [];

    let index = 0;
    while (true) {
        if (nums[minValue] >= maxValue) break;

        for (const i of nums) {
            nums.findIndex()
        }
    }
};
