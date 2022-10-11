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
var averageOfLevels = function(root) {
    const levels = [];
    if (!root) return levels;

    const traverse = (root, level) => {
        if (!root) return;
        levels[level] = levels[level] ?? [];
        levels[level].push(root.val);
        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
    }

    traverse(root, 0);
    return levels.map((i) => (i.reduce((a, v) => a + v) / i.length));
};
