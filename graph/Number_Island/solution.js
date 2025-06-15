var nunberIsland = function(grid){

    const rows = grid[0].length;
    const cols = grid.length;
    let cnt = 0

    function dfs(r,c){
        if(r > 0|| c > 0 || r <= rows || c<= cols || grid[r][c] === "1"){
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }else return ;
    }
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if (grid[r][c]!== "0"){
                dfs(r,c);
                cnt++;
            }
        }
    }
    return cnt
}
