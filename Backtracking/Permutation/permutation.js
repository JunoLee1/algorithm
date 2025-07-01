var permute = function(nums) {
    /*
        * Problem definition:
             given nums, return all the possible permutation.

        * Approaching:
            all the possible permutation => Backtracking


            Decison space               [1, 2, 3]
            

    DS           [1]                             [2].                        [3]
    C           [2, 3]                          [1, 3]                      [1, 2]
        

    DS   [1, 2]           [1, 3]         [2, 1]      [2, 3]          [3, 1]      [3, 2]
    C      [3]              [2]            [3]         [1]             [2]         [1]


    all DS   => [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
    */  
    const n = nums.length;
    const res = []
    // BackTracking

    const BackTracking = (used, path) => {
        // end case
        if (path.length === n){
            res.push([... path])
            return;
        }

        // candidates

        for(let i = 0; i < n; i++){
            candidate = nums[i]
            if (used[i]) continue;

            used[i] = true;
            path.push(candidate)
            
            BackTracking(used, path); // backtrack

            used[i] = false;
            path.pop();
        }
    }

    return res

}