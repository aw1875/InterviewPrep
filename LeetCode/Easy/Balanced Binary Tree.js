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
var isBalanced = function(root) {
    if (!root) return true;

    const traverse = (root) => {
        if (!root) return 0;
        let left = traverse(root.left);
        let right = traverse(root.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1)
            return -1

        return Math.max(left, right) + 1;
    }

    return traverse(root) !== -1;
};
