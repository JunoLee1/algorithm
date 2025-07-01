# Problem name : #94 Rotting Orange

## Problem definition : 
    if there is rotting oranges near by, add minutes. return how many time it takes for rotting orange in the box.

## Approaching:
    BFS
    By traversing each level, find rotting orange, and add time.

    1. count the fresh oranges

    2. until fresh oranges === 0, queue size > 0

    3. boundary check



## code
```js
    var orangesRotting = function(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const queue = [];
        let fresh = 0;


        for(let i = 0 ; i < m; i++){
            for(let j = 0; j < n; j++){
                if (grid[i][j] === 1) fresh++ 
                
                else if (grid[i][j] === 2){
                    queue.push([i, j])
                }
            }
        }
        let minutes = 0
        const directions = [[1, 0],[0, 1],[-1,0],[0, -1]]
        while(queue.length > 0 && fresh > 0){
            const [x, y] = queue.shift()
            
            for(const [dx, dy] of directions){
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 &&ny >=0 && nx < m&& ny < n && grid[nx][ny] === 1 ){
                    grid[nx][ny] = 2;
                    queue.push([x, y]);
                    fresh--
                }
            }
            minutes++
        }
        return fresh === 0 ? minutes; -1
    }

``` 