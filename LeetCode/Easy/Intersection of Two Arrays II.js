/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const duplicates = new Map();
    const result = [];

    nums1.forEach((i) => {
        if (!duplicates.has(i)) duplicates.set(i, 1);
        else duplicates.set(i, duplicates.get(i) + 1);
    });

    nums2.forEach((i) => {
        if (duplicates.has(i) && duplicates.get(i) > 0) {
            result.push(i);
            duplicates.set(i, duplicates.get(i) - 1);
        }
    });

    return result;
};
