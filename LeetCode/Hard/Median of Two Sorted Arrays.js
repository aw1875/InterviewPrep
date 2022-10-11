/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const half = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0)
        return (merged[half - 1] + merged[half]) / 2;
    return merged[half];
};
