var invertTree = function(root) {

    /**
     * problem definition:
        invert the tree, and return its root.
     
    * Approaching :
        current head swap => go to left , right
     */

    function preOrder(node){
        // swap 
        [node.left, node.right] = [node.right, node.left];

        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root);
    return root;
}