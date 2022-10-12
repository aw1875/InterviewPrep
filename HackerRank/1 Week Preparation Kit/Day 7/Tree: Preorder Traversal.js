function preOrder(root) {
    if (!root) return;
    process.stdout.write(root.data + " ");
    preOrder(root.left);
    preOrder(root.right);
}
