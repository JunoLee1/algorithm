function hasPathSum(root,targetSum){
    if (root === null){
        return false;
    };// 

    if (!root.left && !root.right){
        return targetSum ===root.val;
    } // if the root reached leaf node 

    let remaining = targetSum - root.val;
    return hasPathSum(remaining,root.right) || hasPathSum(remaining, root.left);
}

