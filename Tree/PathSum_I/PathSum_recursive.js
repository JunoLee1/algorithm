function hasPathsumRecur(root, targetSum){
    if (!root) return false;

    if(!root.left && !root.right) return targetSum === root.val;

    const newTargetSum = targetSum - root.val;
    return hasPathsumRecur(root.left, newTargetSum) || hasPathsumRecur(root.right, newTargetSum)
}