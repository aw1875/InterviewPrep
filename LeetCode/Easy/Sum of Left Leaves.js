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
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    const dfs = (root) => {
        if (!root) return;
        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val;
        }

        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    return sum;
};
