/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsClone = nums.sort((a, b) => (a - b));

    let max = 0;
    let counter = 0;

    for (let i = 0; i < numsClone.length; i++) {
        if (i === 0) {
            counter++;
        } else if (numsClone[i] === numsClone[i - 1] + 1) {
            counter++;
        } else if (numsClone[i] === numsClone[i - 1]) {
            // skip
        } else {
            max = counter > max ? counter : max;
            counter = 1;
        }
    }

    return counter > max ? counter : max;
};
