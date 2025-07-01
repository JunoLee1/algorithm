var canFinish = function(numCourses, prerequisites) {
    /**
        * Problem definition:
            Return true if you can finish all courses. Otherwise, return false.
        
        * Approaching:
            - 0 -> 1 ? indegree ++(edge)

            - push element in queue which is indegree === 0

            - traverse by bfs

            - return taken === numCourses
     */
    const indegree = new Array(numCourses).fill(0) //[0, 0] edge
    const graph = new Array({length : numCourses} ,() => []) // [ [] , [] ]

    // count the number of edge
    for(const [from, to] of prerequisites){
        graph[from].push(to)
        indegree[to]++
    }

    // subject available to take
    const q = []
    for(let i = 0; i < numCourses; i++){
        if (indegree[i] === 0) q.push(i)
    }


    let taken = 0;
    while(q.length > 0){
        const classes = q.shift();
        taken ++;
        for(let next of graph[classes]){
            indegree[next]--;
            if(indegree[next] === 0){
                q.push(next);
            }
        }
    }
    return taken === numCourses
    
}
