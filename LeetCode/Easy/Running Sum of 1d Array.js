/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = 0;

        for (let j = 0; j <= i; j++) {
            result[i] += nums[j];
        }
    }

    return result;
};
