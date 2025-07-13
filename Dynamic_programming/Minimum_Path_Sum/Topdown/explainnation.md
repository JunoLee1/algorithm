# Problem name: #64. Minimum Path Sum

## Problem definition: 


    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path


## Approaching :

    2. topdown
        base case 
            if row === 0 || col === 0, f(i,j) = f(i - 1, j) + grid[i][j]/ f(i, j - 1) +grid[i][j]


        General case 
            f(n) =  min(f(i - 1,j) + grid[i][j], f(i, j - 1) +  grid[i][j])
## code:
```js

var minPathSum = function(grid) {
    rows = grid.length;
    cols = grid[0].length;

    const memo = new Array.from({length :rows} , () => Array(cols). fill(null));

   function topdown(r, c){
        if( r > rows || c > cols) return Infinity;

        else if(memo[r][c] !== null) return memo[r][c];

        else if ( r === 0 && c === 0 ){
            memo[r][c] = grid[r][c]

        }else{

            memo[r][c] = Math.min(memo[r - 1][c]+ grid[r][c], memo[r][c - 1]+ grid[r][c])
        }
        return memo[r][c]
   }
   return topdown(rows - 1, cols - 1);
}