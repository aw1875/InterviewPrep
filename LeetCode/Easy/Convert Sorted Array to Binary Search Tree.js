/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums) return null;

    const traverse = (nums, start, end) => {
        if (start <= end) {
            const mid = Math.floor((start + end) / 2);
            const node = new TreeNode(nums[mid]);
            node.left = traverse(nums, start, mid - 1);
            node.right = traverse(nums, mid + 1, end);
            return node;
        }

        return null;
    };

    return traverse(nums, 0, nums.length - 1);
};
