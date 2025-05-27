var canVisitAllRoom = function(rooms){
    // enter 0th rooom
    const stack = [0];
    const seen = new Set([0]);
    
    while(stack.length > 0){
        let room_idx = stack.pop();
        const keys = rooms[room_idx];
        for(let key of keys){
            if(!seen.has(key)){
                seen.add(key)
                stack.push(key)
            }
        }

    }
    return seen.size === rooms.length
}
console.log(canVisitAllRoom([[1],[2],[3],[]]))