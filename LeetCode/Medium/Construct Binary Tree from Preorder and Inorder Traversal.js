/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const buildTreeFunc = (preStart, inStart, inEnd, preorder, inorder) => {
        if (preStart > preorder.length - 1 || inStart > inEnd) return null;

        const node = new TreeNode(preorder[preStart]);
        let currentIndex = 0;

        for (let i = inStart; i <= inEnd; i++) {
            if (inorder[i] === node.val) currentIndex = i;
        }

        node.left = buildTreeFunc(preStart + 1, inStart, currentIndex - 1, preorder, inorder);
        node.right = buildTreeFunc(preStart + currentIndex - inStart + 1, currentIndex + 1, inEnd, preorder, inorder);
        return node;
    }

    return buildTreeFunc(0, 0, inorder.length - 1, preorder, inorder);
};
