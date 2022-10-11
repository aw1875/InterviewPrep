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
var isUnivalTree = function(root) {
    let startVal = root.val;

    const dfs = (root) => {
        if (!root) return;
        if (root.val !== startVal) return false;
        if (dfs(root.left) === false) return false;
        if (dfs(root.right) === false) return false;
        return true;
    }

    return dfs(root);
};
