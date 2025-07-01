var orangesRotting = function(grid) {
    // problem definition return how long takes the oranges get rotton. else return -1;

    // count fresh orange

    const m = grid.length;
    const n = grid[0].length;
    const queue = []
    let fresh = 0
    for (let i = 0; i < m; i++){
        for(let j = 0;j < n; j++){
            if(grid[i][j] === 1){
                fresh++
            }
                else if(grid[i][j] === 2){
                    queue.push([i, j])
                }
        }
    }
    // 4 direction
    let minutes = 0
    const directions = [[1,0],[0,1],[-1,0],[0,-1]]
    while (queue.length > 0 && fresh > 0){
        const [x, y] = queue.shift();
        const size = queue.length
        for(const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy;

            for(let i = 0; i < size; i++){
                if (nx >= 0 && ny >= 0 && nx < m && ny < n &&grid[nx][ny] ===1 ){
                    
                    grid[nx][ny] = 2
                    queue.push([nx, ny])
                    fresh--
                }
            }
        }
        minutes ++
    }
    return fresh === 0? minutes: -1;
}