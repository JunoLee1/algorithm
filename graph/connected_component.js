var countUndirectedComponent = function(nums, edges){
    const n = nums.length; 
    const visited = new Array(n).fill(false); 
    const vertices = new Array.from({length : n} , () => []); 
    let cnt  = 0;

    // making vertex
    for(const [v1,v2] of edges){
        vertices[v1].push(v2);
        vertices[v2].push(v1);
    }
    // processing
    function DfsStack(start){
        const stack = [start];
        visited[start] = true;
        
        while (stack.length > 0){
            const node = stack.pop();
            
            for(const neigbor of vertices[node]){
                if(!visited[neigbor]){
                    visited[neigbor] = true;
                    stack.push(neigbor);
                }
            }
        }
    }
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            DfsStack(i);
            cnt++;
        }
    }
    return cnt;
}