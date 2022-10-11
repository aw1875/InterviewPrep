/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if ((nums.length - 1) < 3) return nums.reduce((a, b) => a + b);

    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1

        while (j < k) {
            const currentSum = nums[i] + nums[j] + nums[k];
            if (Math.abs(result - target) > Math.abs(target - currentSum)) result = currentSum;
            if (result === target) return result;
            if (currentSum > target) k--;
            else j++;
        }
    }

    return result;
};
