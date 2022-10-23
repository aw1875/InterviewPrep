/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const seen = new Map;
    let missing, copy;

    for (const n of nums) {
        seen.set(n, (seen.get(n) || 0) + 1);
    }

    for (let i = 1; i < nums.length + 1; i++) {
        if (!seen.has(i)) missing = i;
        else if (seen.get(i) == 2) copy = i;
    }

    return [copy, missing];
};
