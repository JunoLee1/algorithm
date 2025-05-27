var invertedTree_Iterative = function(root){
    if (!root) return null;
    //
    const stack = [root];

    while (stack.length > 0){
        const node = stack.pop();// current pointer

        [node.left, node.right] = [node.right, node.left];// switch 
        
        if(node.left) stack.push(node.left);// move pointer
        if(node.right) stack.push(node.right)
    }
    return root;
}
var invertedTree_Recursive = function(root){
    if (!root) return null;

    function recur(t){
        [t.left, t.right] = [t.right, t.left];

        if (t.left) recur(t.left);
        if (t.right) recur(t.right);
    }

    recur(root);
    return root;
}