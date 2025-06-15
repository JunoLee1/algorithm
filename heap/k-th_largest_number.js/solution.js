class min_Heap{

    constructor(){
        this.heap = [];// empty heap
    }

    /*       function         */
    push(val){
        // push the value and heapify
        this.heap.push(val);
        this._UpHeapify();
    }


    pop(){
        // if the head popped out, the tail should be head. reheapify
        if (this.heap.length === 0) return undefined;

        const top = this.heap[0];
        const end = this.heap.pop();

        if(this.heap.length > 0){
            this.heap[0] = end; 
            this._DownHeapify();
        }

        return top;
    }


    size(){
        return this.heap.length;

    }


    peek(){
        return this.heap.top;
    }


    /*       operator      */
    _UpHeapify(){
        let index = this.heap.length - 1;
        let parent = Math.floor((index - 1) / 2);

        while (index > 0){
            if (this.heap[parent] >= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    _DownHeapify(){
        let index = 0;
        const len = this.heap.length

        while(true){
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if(left < len && this.heap[left] < this.heap[smallest]) smallest = left;

            if (right < len && this.heap[right]< this.heap[smallest]) smallest = right;

            if (smallest !== index) break;
            [this.heap[smallest],this.heap[index] = this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }

}


var findKthLargest = function(nums, k) {
    const minHeap = new min_Heap();

    for (let num of nums){
        minHeap.push(num)// value push
        if (minHeap.size() > k) minHeap.pop(); // pop from smallest number to largest till reach k-th
    }

    return minHeap.top();
}
console.log(findKthLargest([3,2,1,5,6,4],2));