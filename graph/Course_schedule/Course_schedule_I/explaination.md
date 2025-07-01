# Problem name: # course schedule - I

 ## Problem definition
        Return true if you can finish all courses. Otherwise, return false.
 ## Approaching:
        Cycling graph ( this is because i should finish all courses) => Khan algorithm.

        1. count edge 
         [a, b] takes b class and then a 
        2. make queue

        3. return take === numCourse
 ## Code:

 ```js 
var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const graph = Array.from({length : numCourses}, () =>[]);

    for(const[from, to] of prerequisites){
       graph[from].push(to);
       indegree[to]++
    }
    const queue = []
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] === 0 ){
            queue.push(i)
        }
    }
    let take = 0
    while(queue.length > 0){
        const crnt = queue.shift();
        take++
        for(let next of graph[crnt]){
            indegree[next]--
            if (indegree[next] === 0){
                queue.push(next)
            }
        }
    }
    return take === numsCourses ?  true: -1 
}

