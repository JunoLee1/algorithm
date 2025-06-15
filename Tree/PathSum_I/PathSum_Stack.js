function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var hasPathSum = function(root, targetSum){
    /* problem definition : if sum has targetSum return true */
    /* base case : root is null return false */
    const stack = [{ node:root, sum: root.val}]
    if (!root) return false;


    while (stack.length > 0){
        // if nodes reached the end, sum === targetsum, return true.
        if (!node.left && !node.right && sum === targetSum) return true;

        if (node.left){ // left to left
            stack.push({node : node.left ,sum : sum + node.left.val})
        }
        
        if (node.right){    // right to right
            stack.push({node:node.right, sum : sum + node.right.val})
        }
    }
    return false; // sum !== targetSum
}