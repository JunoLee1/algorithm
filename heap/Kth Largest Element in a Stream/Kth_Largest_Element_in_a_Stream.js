class min_Heap{
    constructor(){
        this.heap = [];
    }

    add(val){
        this.heap.push(val)
        this._heapifyUp()
    }


    pop(){
        const length = this.heap.length
        const top = this.heap[0];
        const end = this.heap.pop();

        if(length <= 0) return null;

        this.heap[0] = end;
        this._heapifyDown()
        return top 
    }


    size(){
        return this.heap.length;
    }


    peak(){
        return this.heap[0]
    }


    _heapifyUp(){
        let idx = this.heap.length - 1
        const val = this.heap[idx]
        while(idx > 0){
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= val) break;

            this.heap[idx] = this.heap[parentIdx]
            idx = parentIdx
        } 
        this.heap[idx] = val // insert the root in proper position
    }


    _heapifyDown(){
        let idx = 0
        const length = this.heap.length;
        const val = this.heap[0]
        while(true){
            const left = idx * 2 + 1;
            const right = idx * 2 + 2;
            let smallest = idx;

            if (left < length && this.heap[left] < this.heap[smallest]){
                smallest = left
            }
            if (right < length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }
            if(smallest === idx) break;
            this.heap[idx] = this.heap[smallest];
            idx = smallest; // smallest가 인덱스가 새로운 인덱스가 됨
        }
        this.heap[idx] = val
    }
}
class K_thLargestElement{
    constructor(){
        this.k  = k;
        this.heap = min_Heap;
    }
    add(val){
        if (this.k >  this.heap.size){
            // keep the relationship
            this.heap.pop()
        }
        return this.heap.peak();
        
    }
}