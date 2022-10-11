/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);
    nums.forEach((v, i) => {
        if (v === target) result.push(i);
    });

    return result;
};
