# Problem Name: #230 k-th smallest number in BST

## Problem definition 
    return k-th smallest number in Binary Searching Tree.


## Approaching:
    using the character of BST.(left.val < node.val < right.val)

    -> inOrder traverse


## Code
``` js

var kthSmallest = function(root, k) {
    let count = 0
    let res = null;

    function inOrder(node){
        if (node === null) return null;


        inOrder(node.left);
        count ++;

        if(k === count){
            res = node.val
            return ;
        }

        inOrder(node.right)
    }
    inOrder(root)
    return res
}