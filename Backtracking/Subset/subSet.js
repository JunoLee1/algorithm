var subSet = function(nums){
    // definition: find all possible subset.
    // base case : if current index are reach the end, return the result.

    const res = [];
    function bt(index, path){
        if (index === nums.length){
            res.push([...path]);
            return ;
        }
        // 0 set
        bt(index + 1, path);
        
        // other
        path.push(nums[index]);
        bt(index + 1, path);
        path.pop()
    }   
    bt(0,[]);
    return res



}