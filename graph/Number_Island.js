var nunberIsland = function(grid){
    // if grid[r][c] === "1",start track.
    // tracking finish => cnt 

    const rows = grid.length;
    const cols = grid[0].length;
    let cnt = 0;
    function dfs(r,c){
        if (r < 0 || c < 0 ||  c >= cols || r >= rows || grid[r][c] !=="0") return ; // if im outside of gametable or in the sea
        
        grid[r][c] = "0"// checked visit
        
        //tracking 
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    for(let r = 0; r < rows; r++){
        for(let c = 0; c< cols; c++){
            if (grid[r][c] ==="1") // if i am in the land
                dfs(r,c)
                cnt ++
        }
    }
    return cnt;
}


//time complexity o(n * m)
// space complexity o(n + m)