var findRedundantConnection = function(edges) {
    const n = edges.length
    const parent = Array(n + 1).fill(0).map((_,i) => i)
    // result = [0, 1, 2, 3, 4]
    // parent = [0, 1, 2, 3, 4 o]

    const find = (x) => {
        if(x !== parent[x]){
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    const union = (x, y) => {
        // searching each parent node
        const root_x = find(x);
        const root_y = find(y);

        parent[root_y] = root_x // connect

        if(root_x === root_y) return false;

        return true
    }
    for(const[start, end] of edges){
        if(!union(start, end)) return [start, res]
    }
}