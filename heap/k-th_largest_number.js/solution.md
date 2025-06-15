# Problem Name : Leetcode 215

## problem url: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

## definition 
    return the k-th largest number in array.
    solve problem without sorting.
## Approach
    1. minHeap
        if heap size is less then k, return top

    2. maxHeap


```js
class minHeap{
    constructor(){
        this.heap = [];
    }
    //function
    push(val){
        this.heap.push(val);
        this._HeapifyUp();
    }


    pop(){
        const top = this.heap[0]
        const end = this.heap.pop();
        // if the node is popped out, the tail should be end.
        
        if(this.heap.length > 0){
            this.heap[0] = end;
            this._HeapifyDown()
        }

        return top ; 
    }


    size(){
        return this.heap.length;
    }


    peek(){
        return this.heap[0];
    }
    
    
    // operator
    _HeapifyUp(){
        // if the parent node < current node, switch 
        // keep going to up
        let index = this.heap.length - 1 ; 
        let parent = Math.floor((index - 1 )/ 2);

        while(index > 0){
            if (this.heap[parent] <= this.heap[index]){
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            } else{
                break;
            }
            index = parent;
        }


    }


    _HeapifyDown(){
        let index = 0;
        const length = this.heap.length
        while(true){
            let left = index * 2 + 1;
            let right = index * 2 + 2; 
            let smallest = index

            if (left < length && this.heap[smallest] > this.heap[left]){
                smallest = left;
            }

            if(right < length && this.heap[smallest] > this.heap.right){
                smallest = right;
            }

            if(index !== smallest){
                [this.heap[index],  this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

                index = smallest
            }
        }
        //
    }

}

var findK_Largest = function(nums, k){
    const minHeap = new minHeap()
    for(num of nums){
        minHeap.push(num)
        if (minHeap.size() > k){
            minHeap.pop();
        }
    }
    return minHeap.top();
}