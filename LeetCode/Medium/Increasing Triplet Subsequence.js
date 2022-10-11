/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let j = Infinity;
    let k = Infinity;
    let result = false;

    nums.forEach((i) => {
        if (i > j && i > k) { result = true; return; }
        if (i > j) k = i;
        else j = i;
    });

    return result;
};
