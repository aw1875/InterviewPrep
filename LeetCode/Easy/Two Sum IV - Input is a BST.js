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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const treeArr = [];

    const traverse = (root) => {
        if (!root) return null;
        traverse(root.left);
        treeArr.push(root.val);
        traverse(root.right);
    }

    traverse(root);

    let p1 = 0;
    let p2 = treeArr.length - 1;

    while (p1 < p2) {
        if (treeArr[p1] + treeArr[p2] === k) return true;
        if (treeArr[p1] + treeArr[p2] > k) {
            p2--;
        } else {
            p1++;
        }
    }

    return false;
};
