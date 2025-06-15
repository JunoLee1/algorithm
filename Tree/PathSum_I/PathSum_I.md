# Problem name: Leetcode 112

## Problem definition
    return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

## Approach
    1. using stack
        if sum === targetSum; return true

        if current node left or right exist? searching


    2. recursion 


```js
    function TreeNode(val, left, right){
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }


    var hasPathSum = function(root, targetSum){
        const stack = [{node : root, sum:root.val}]

        if (!root) return false;


        while(stack.length > 0){
            const {node, sum} = stack.pop(); 

            if(sum === targetSum) return true;

            if(node.left){
                stack.push({node : node.left, sum : sum + node.left.val});
            }

            if(node.right){
                stack.push({node : node.right, sum : sum + node.right.val})
            }
        }
        return false;
    }