var letterCombinations = function(digits) {

    //problem definition: return all possible letter combination that number could represent.
    // using backtracking this is because it asked combination.

    // if the tracking number and digits length are equal, push it into result.
    const map = {
        2: "abc", 3: "def", 4: "ghi", 5: "jkl",
        6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"
    };
    
    const res = []

    function dfs(index, path){
        if(path.length === digits.length){ //  base case
            res.push(path);
            return ;
        }

        // current stage

        const candidates = map[digits[index]];
        for(c of candidates){
            dfs(index + 1, path + c) // going to next stage, adding letter
        }
    }
    dfs(0, "")// 0 to end. 
}