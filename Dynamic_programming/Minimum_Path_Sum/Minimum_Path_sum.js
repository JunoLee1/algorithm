// bottom -up
var minPathSum = function(grid){
    
    const m = grid.length;
    const n = grid[0].length;
    const dp= Array.from({length:m} , () => Array(n).fill(0));

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if (i ===0 || j === 0){
                dp[i][j] = grid[i][j]
            }
                else if( i === 0){
                    dp[i][j] = dp[i][j - 1] + grid[i][j]
                }
                else if (j === 0){
                    dp[i][j] = dp[i][j - 1] + grid[i][j]
                }

            dp[i][j] = Math.min(dp[i][j - 1], dp[i-1][j]) + grid[i][j];
        }   
    }
    return dp[m - 1][n- 1]

}
// topdown
var minPathSum = function(grid){
    const m = grid.length;
    const n = grid[0].length;
    const memo = Array.from({length:m} , () => Array(n).fill(-1));


    function dfs(i,j){
        // out of boudary
        if (i >= m || j >= n) return false

        // existance
        if (memo[i][j] !== -1) return memo[i][j]

        // end point
        if (i === m - 1 && j === n - 1) return grid[i][j];

        // general case
        memo[i][j] = Math.min(dfs(i + 1, j), dfs(i, j+ 1))+ grid[i][j];
        return memo[i][j]
    }
    return dfs(0,0)
}