var canFinish = function(numCourses, prerequisites) {
    const graph = Array({length: numCourses}, () => [])


    const dfs = (visited, node) =>{

        // occurance cycle
        if(visited[node] === 1) return false; 
        if(visited[node] === 2) return true;

        visited[node] = 1; // before visited

        for(let next of graph[node]){
            if(!dfs(next)) return false
        }

        visited[node] = 2; // visited 
    }
    for(let i = 0; i < numCourses; i++){
        if(!dfs(i)) return false
    }
    return true;
}