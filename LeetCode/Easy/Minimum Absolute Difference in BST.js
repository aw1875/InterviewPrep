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
var getMinimumDifference = function(root) {
    if (!root) return 0;
    let min = Infinity;
    const treeArray = [];

    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        treeArray.push(root.val);
        dfs(root.right);
    };

    dfs(root);

    for (let i = 1; i < treeArray.length; i++) {
        const currentDiff = treeArray[i] - treeArray[i - 1];
        if (currentDiff < min) {
            min = currentDiff;
        }
    }

    return min;
};
