## Problem name: leetcode #17

# problem definition: find all possible combination of a phone keypad letter by given digits.


# approach 
    - Backtracking (this is because combination)

    "2 5"

    decison space      |"a" | "b"| "c"| 



    decison space | "j ", "k", "l" | "j", "k", "l" |



    base case = if the decison space reach the end, backtrack(if the path.length === digits.length)


## code 
``` js
var letterCombination = function(digits){
    const map = {
        2: "abc", 3: "def", 4: "ghi", 5: "jkl",
        6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"
    };

    const res = [];

    function backtracking(index,path){

        if (path.length === digits.length){// base case
            res.push(path);
            return ;
        }

        const candidates = map[digits[index]];

        for(c of candidates){
            dfs(index + 1, path + c)
        }
    }
    dfs(0,"")
    return res

}