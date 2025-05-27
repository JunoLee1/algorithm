function hasPathSum(root, targetSum){
    if(root = null) return false;
    
    // stack:[current node, current_sum]
    const stack =[[root, root.val]];

    while (stack.length > 0){
        const [node, currentSum] = stack.pop();

        if (!node.left && !node.right){
            return currentSum === targetSum;
        }
        if (node.right){
            stack.push([node.right, currentSum + node.right.val]);
        }
        if (node.left){
            stack.push([node.left, currentSum + node.left.val]);
        }
    }
    return false;
     
}