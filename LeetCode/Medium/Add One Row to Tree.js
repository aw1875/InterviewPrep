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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) return new TreeNode(val, root, null);

    const traverse = (root, currentDepth = 1) => {
        if (!root) return;
        if (currentDepth === (depth - 1)) {
            root.left = new TreeNode(val, root.left ? root.left : null, null);
            root.right = new TreeNode(val, null, root.right ? root.right : null);
            return;
        }

        traverse(root.left, currentDepth + 1);
        traverse(root.right, currentDepth + 1);
    };

    traverse(root);
    return root;
};
