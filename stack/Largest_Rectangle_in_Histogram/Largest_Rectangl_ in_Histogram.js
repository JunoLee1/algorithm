var largestRectangleArea = function(heights) {
    /*
        problem definition: return the area of the largest rectangle in the histogram.
        
        Approaching:
            stack
                Tracking the previous elements, chase small element => monotonic increasing stack

                area = width * height
                width =  current index - previous index - 1 
        */

    const n = heights.length;
    const stack = [];
    let maxArea = 0;

    for(let i = 0; i < n; i++){
        while(stack.length > 0 && heights[stack[stack.length]]){
            popped_idx = stack.pop()
            const height = heights[popped_idx]
            const width = stack.length ===0 ?i : i - stack[stack.length -1] - 1
            const area = height * width;
            maxArea = Math.max(maxArea, area)
        }
        stack.push(i)
    }
    while(stack.length > 0 && heights[stack[stack.length]]){
        popped_idx = stack.pop()
        const height = heights[popped_idx]
        const width = stack.length ===0 ? n : n - stack[stack.length -1] - 1
        const area = height * width;
        maxArea = Math.max(maxArea, area)
        }
    return maxArea ; 
}