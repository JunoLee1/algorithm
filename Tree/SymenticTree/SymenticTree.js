function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}



var symenticTree_Iterative = function(root){
    if (!root) return true;
    const stack =[];
    stack.push([root.left, root.right]);// comparing 

    while (stack.length > 0){
        const [left, right] = stack.pop();
        //const pair = stack.pop
        //const left = pair[0]
        //const right = pair[1]


        if (!left && !right) continue;// both of pointer ara leaf
        if (!left || !right || left.val !== right.val) return false;
        // x pair or x syme binary tree

        // move pointer
        stack.push([left.left, right.right])
        stack.push([left.right, right.left])
    
    }
    return true;

}
console.log(symenticTree_Iterative([1,2,2,null,3,null,3]))


var symenticTree_recursive= function(root){
    
}