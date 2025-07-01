const { difference } = require("next/dist/build/utils");

var numDistinctIslands = function(grid) {
    /**
     * Problem Definition:
        You are given a 2D Binary grid consisiting of 0s(water) and 1s(land).
        An island is defined as a set of horizonally or vertically 1s. Two island are considered the same if one can be translated (moved) to match the other's shape exactly, without rotation or reflection.

        Your task is to find the numnber of distinct island shapes appear in the grid.


     * Approaching:
        - DFS
            => if out of boundary , Backtracking

            => check visit
            
            => direction

            => save direction and movement in path.

            => back track  again to disitiguish different type of structure.

            => add shape in the set

            return the set size
     */
    const rows = grid.length;
    const cols = grid[0].length;


    const visited = Array.from({length : rows}, () => Array(cols).fill(false))
    const shapes = new Set(); // to count the each unique shape of island

    const dfs = (r, c, nextDir) => {
        // boundary check
        if(r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1 || visited[r][c] === true){
            return "B" // Backtrack
        } 

        // visit check
        visited[r][c] = true;

        // direction and movement => path
        let currPath = nextDir;

        const dirs = [[1, 0, "D"], [0, 1,"R"], [-1, 0,"U"], [0, -1,"L"]]

        for(const [dr, dc, dir] of dirs){
            const nr = r + dr;
            const nc = c + dc;

            currPath += dfs(nr, nc, dir)
        }
        currPath += "B" // end of path marker to distinguish different shape structcure
        return currPath;
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j< cols; j++){
            if(visited[i][j] !== true && grid[i][j] === 1){
                let shape = dfs(i, j, "S")
                shapes.add(shape);
            }
        }
    }
    return shapes.size

}
