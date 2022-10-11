/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const intersections = nums.reduce((a, b) => a.filter((c) => b.includes(c)));
    return intersections.sort((a, b) => a - b);
};
