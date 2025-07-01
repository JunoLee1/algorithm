var numDistinctIslands = function(grid) {
    let cnt = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({length : rows}, ()=> Array(cols).fill(false))
    const shapes = new Set(); // save Distinct shapes

    const dfs = (r, c, dir) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1){
            return "B" // backtracking
        }
        visited[r][c] = true;
        let curPath = dir;


        const directions = [[1, 0,'D'], [0, 1,'R'], [-1, 0, 'U'], [0, -1, 'L']];

        for(const [dr, dc, nextDir] of directions){
            const nr = r + dr;
            const nc = c + dc;

            curPath += dfs(nr, nc, nextDir)

        }
        return curPath;

    }
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const shape = dfs(i, j, '','S');
            shapes.add(shape);
        }
    }
    return shapes.size;
}
