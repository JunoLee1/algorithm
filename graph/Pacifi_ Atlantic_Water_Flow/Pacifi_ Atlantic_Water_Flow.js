var pacificAtlantic = function(heights) {
    const directions = [[1,0], [0, 1], [-1, 0], [0, -1]];
    const cols = heights[0].length;
    const rows = heights.length;
    

    const atlanticVisited = new Array.from({ length : rows }, () => Array(cols).fill(false));
    const pacificVisited = new Array.from({ length : rows }, () => Array(cols).fill(false));
    
    function dfs(r, c, visited){
        visited[r][c] = true;
        for(const [dr, dc] of directions){
            let nr = r + dr;
            let nc = c + dc;

            // if the ocean has visited and next columns and rows is out of ranged, go to next rows or column. 
            // if the case isnt fit with basecase  go to next stage;
            
            if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || visited[nr][nc] || heights[r][c] < heights[nr][nc]){
                continue;
            }
        // if atlantic ocean and pacific ocean has a commnon area, push the location into result.
            dfs(nr, nc, visited);
        }
    }
    for (let r =0; r < rows; r++){
        dfs(r, 0, pacificVisited)
        dfs(r, cols - 1, atlanticVisited)
    }

    for (let c = 0; c < cols; c++){
        dfs(0, c, pacificVisited)
        dfs(rows - 1, c, atlanticVisited)
    }
    const res = []
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(atlanticVisited[r][c] && pacificVisited[r][c]){
                res.push([r, c])
            }
        }
    }
    return res;
}