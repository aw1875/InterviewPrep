/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = 0;

    nums.forEach((v, i) => {
        if (v === 0) { length++; }
        else if (length > 0) {
            let temp = v;
            nums[i] = 0;
            nums[i - length] = temp;
        }
    });
};
