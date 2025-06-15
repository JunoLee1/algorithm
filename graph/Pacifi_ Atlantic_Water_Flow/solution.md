# Problem Name: #417 Pacific Atlantic Water Flow.


## Problem defintion: return a 2D list of coordinates result wher  results[i] =[r[i],c[i]] denotes that rain water can flow from cell

    the rain water can flow to neighboring cell directly if neighboring cell heights is less than or equal to the current cell.


    Atlantic Ocean is located in right buttom edge, and pacific touches left top
## Approach :

    Depth first Searching => 2D array searching 

        tracking two oceans, find common area


## Code
```js

    var pacificAtlantic = function(heights){

        const directions = [[1, 0], [0, 1],[-1, 0 ][0, -1]];

        const cols = heights[0].length;
        const rows = heights.length;

        const atlanticVisited = new Array.from({length : cols} , () => Array.fill(false));

         const pacificVisited = new Array.from({length : cols} , () => Array.fill(false))

        
        function dfs(r ,c ,visited){
            for(const [dr, dc] of directions){
                visited[r][c] = true;

                let nr = r + dr;
                let nc = c + dc;

                if (nr < 0 || nc < 0 || nc >= cols || nr >= rows || visited[nr][nc] || heights[nr][nc] > heights[r][c]){
                    continue;
                }
                dfs(nr, nc, visited);
            }
        }

        for(let r = 0; r <rows; r++){
            dfs(r, 0, atlanticVisited)
            dfs(r, cols - 1, pacificVisited)
        } 
        for(let c = 0; c <cols; c++){
            dfs(0, c, atlanticVisited)
            dfs(rows -1, c, pacificVisited)
        }
        
        for (let r = 0 ; r < rows ; r++){
            for(let c = 0; c < cols ; c++){
                if (atlanticVisited[r][c] && pacificVisited[r][c]){
                    res.push([r, c])
                }
            }
        }
        return res;
    }
