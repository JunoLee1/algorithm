var kthSmallest = function(root, k) {
    /*
        * Problem Definition:  Return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
        
        * Approaching: In order traverse <= BST's character.
            left.val < root.val <  right.val

     */

    let count = 0;
    let res = null;

    function inOrder(node){
        if (node === null) return null
        
        inOrder(node.left);
        count++;

        if (count === k){
            res = node.val
            return;
        }
        inOrder(node.right)
        
    }
    inOrder(root);
    return res;
}