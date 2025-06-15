# Problem name : Leetcode #74  Search 2D Matrix

## problem definition: 
    Given m * n matrix, return true if the target is in matrix.

    each rows are descending sort
## Apporach:
    DFS => this is because searching target by tracking past path. 



## comment :
 inside of loop, I should've used return false...

 

## code
``` js

var searchMatrix = function(matrix , target){
    // storage 
    const rows = matrix.length;
    const cols = matrix[0].length;

    const visited = new Array.from({length : rows },() => Array.fill(false));


    function dfs(r, c){
        if (r < 0 || c < 0 || r >= rows || c >= cols|| visited[r][c]) return false;

        if (matrix[r][c]=== target){
            return true
        }

        if(matrix[r][c] !== target) return false;
        
        return dfs(r + 1, c) || dfs(r, c+ 1)
    }
    return dfs(0,0)
}
