/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const results = new Map();

    nums.forEach((num) => {
        if (results.has(num)) {
            results.set(num, results.get(num) + 1);
        } else {
            results.set(num, 1);
        }
    });

    const filteredResults = [...results.entries()].sort((a, b) => b[1] - a[1]);
    return filteredResults.slice(0, k).map((v) => v[0]);
}
