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
var minDiffInBST = function(root) {
    let min = Infinity;
    let last = -Infinity;

    const traverse = (root) => {
        if (!root) return;
        traverse(root.left);
        if ((root.val - last) < min) min = (root.val - last);
        last = root.val;
        traverse(root.right)
    }

    traverse(root);
    return min;
};
