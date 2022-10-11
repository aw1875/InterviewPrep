/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];
    let leftPtr = 1;
    let rightPtr = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = rightPtr;
        rightPtr *= nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] *= leftPtr;
        leftPtr *= nums[i];
    }

    return answer;
};
