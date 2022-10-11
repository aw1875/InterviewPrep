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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];

    const traverse = (root) => {
        if (!root) return;
        traverse(root.left);
        traverse(root.right);
        result.push(root.val);
    }

    traverse(root);

    return result;
};
