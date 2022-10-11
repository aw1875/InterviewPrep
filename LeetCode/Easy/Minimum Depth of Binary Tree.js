/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    let minLeft = minDepth(root.left);
    let minRight = minDepth(root.right);

    if (minLeft === 0 || minRight === 0) return minLeft + minRight + 1;
    return Math.min(minLeft, minRight) + 1;
};
