# Problem name: #64. Minimum Path Sum

## Problem definition: 


    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path


## Approaching :

    1. Bottom up
        base case 
            if row === 0 || col === 0, f(i,j) = f(i - 1, j) + grid[i][j]/ f(i, j - 1) +grid[i][j]


        General case 
            f(n) =  min(f(i - 1,j) + grid[i][j], f(i, j - 1) +  grid[i][j])
## code:
```js

var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dp = new Array.from({ length : rows},() => Array(cols).fill(0)) 

    for(let r = 0; r < rows; r++){
        for(let c = 0; c<cols; c++){
            if(r === 0 && c === 0) dp[r][c] = grid[r][c]
            if(r === 0){
                dp[r][c] = dp[r][c - 1] + grid[r][c]
            }
            else if (c === 0){
                dp[r][c] = dp[r - 1][c] + grid[r][c]
            }
            dp[r][c] = Math.min(dp[r - 1][c] + grid[r][c], dp[r][c - 1]+ grid[r][c])
        }
    }
 
    return dp[rows - 1][cols - 1]
}