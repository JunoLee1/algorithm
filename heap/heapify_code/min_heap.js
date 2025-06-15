class min_Heap{

    constructor(){
        this.heap = [];
    }


    push(val){
        this.heap.push(val);
        this.reverseHeapify();
    }


    pop(){
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0){
            this.heap[0] = end;
            this.heapify();
        }


        return top;
    }


    size(){
        return this.heap.length;
    }


    top(){
        return this.heap[0];
    }
/* private operator*/


    reverseHeapify(){
        let index = this.heap.length - 1;
        let parent = Math.floor((index - 1)/2);

        while (index > 0){
            if(this.heap[index] <= this.heap[parent]){
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            }else{
                break;
            }

            index = parent ;
        }
    }


    heapify(){
        let index = 0;
        const len = this.heap.length;


        while (true){
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (left < len && this.heap[left] < this.heap[smallest]){
                smallest = left;
            }

            if (right < len && this.heap[right] < this.heap[smallest]){
                smallest = right;
            }

            if (smallest !== index){
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            }
        }
    }
}