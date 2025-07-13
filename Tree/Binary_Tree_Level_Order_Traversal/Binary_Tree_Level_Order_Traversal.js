var levelOrder = function(root) {
    /*
        * Problem definition 
            input : root of Binary tree
            output :  Return the level order traversal of its nodes' values.


        * Approaching
            1. If root is null, return empty list 

            2. Create queue and dequeue(shift) the root

            3. Traverse (in the level)
                - pop the current node in queue, push it in each level.

                - If the node has a left child, enqueue the node.  

                - Repeat the same for the right child

            4. push the level list into result Array.

            5. return the result Array.
    */

    const queue = [root]; 
    const res = [];

    // base case
    if (!root) return [];


    while (queue.length>0){
        const level = [];
        const levelSize = queue.length;
        for(let i = 0; i < levelSize; i++){
            const crnt = queue.shift();
            level.push(crnt.val);

            if(crnt.left) queue.push(crnt.left)
            if(crnt.right) queue.push(crnt.right)
        }
        res.push(level)

    }

    return res;
}