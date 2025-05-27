function bfs(graph, startNode){

    let queue = [startNode];
    let visited = new Set();// check started node
    visited.add(startNode);

    while(queue.length > 0){
        let node = queue.shift(); // popped out from queue
        console.log(node);
        for (let adjacent_node of graph[node]){
            if (! visited.has(adjacent_node)){
                visited.add(adjacent_node);
                queue.push(adjacent_node);
            }
        }
    }
}
let graph = {
    "A":["B", "C"],
    "B":["A", "D", "E"],
    "C":["A", "F"],
    "D": ["B"],
    "E":["B", "F"],
    "F":["C","E"]
};
bfs(graph,"A")