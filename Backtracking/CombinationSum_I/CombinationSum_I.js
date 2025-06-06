var sumOfCombination = function(candidates, target){
    // problem definition : find all possible  where the sum equals the target.
    
    // Use backtracking because we need to explore all possible combinations.
    const res = [];

    function backTracking(start, path, sum){ 
        // end case
        if (sum > target) return ;

        if (sum === target){
            res.push([...path])
            return ;
        }

        for(let i = start; i < candidates.length ; i++){
            path.push(candidates[i])// chosen
            backTracking(i, path, sum + candidates[i]) //Recurse with the updated sum and current index (allow repeated use)
            path.pop();  // Backtrack: remove the last chosen number
        }
    }

    backTracking(0,[],0);
    return res;
}