var searchMatrix = function(matrix, target) {
    /** problem definition : return true target value is in matrix*/
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = new Set();

    function dfs(r, c){
        // base case 
        if(r < 0 || c < 0 ||  r >= rows || c >= cols || visited.has(`${r},${c}`)){
            return false
        }

        visited.add(`${r},${c}`)

        if (matrix[r][c] === target) return true; 

        return dfs(r + 1, c) || dfs(r, c + 1);// to do return specific value 
    }

    // operator
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if (dfs(r,c)) return true
        }
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    3
))
//binary search this is because it is sorted 2D array