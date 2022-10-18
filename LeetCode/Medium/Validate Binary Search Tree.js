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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const traverse = (root, low, high) => {
        if (!root) return true;
        if (low.val >= root.val || high.val <= root.val) return false;
        return traverse(root.left, low, root) && traverse(root.right, root, high);
    }

    return traverse(root, -Infinity, Infinity);
};
