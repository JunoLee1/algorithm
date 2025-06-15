class maxHeap{
    constructor(){
        this.heap = [] // empty heap
    }


    /* function */
    push(val){
        // push the value. and comparing with the parent index => reheapify
        this.heap.push(val)
        this._reverseHeapify();
    }


    pop(){
        if(this.heap.length === 0) return undefined; 


        const top = this.heap[0];
        const end = this.heap.pop();


        if (this.heap.length > 0){
            this.heap[0] = end; 
            this.heapify()
        }
        

        return top;//
    }


    size(){}


    top(){}

    
    
    /* private */
    _reverseHeapify(){
        // if the parent index is smaller than child index, the child become parent index
        const len = this.heap.length;
        let index = len -  1;

        while (index > 0){
            let parent = (index - 1 / 2);

            if (this.heap[parent] <= this.heap[index]){
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            }else{
                break;
            }

            index = parent
        }
    }


    heapify(){
        let index = 0;
        const len = this.heap.length;

        while (true){// X undefined 

            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let large = index;


            if (left > len &&  this.heap[index] < this.heap[left]){
                large = left;
            }

            if(right > len && this.heap[index] < this.heap[right]){
                large = right;
            }

            if (large !== index){
                [this.heap[large], this.heap[index]] = [this.heap[index], this.heap[large]]
                index = large
            }

        }
    }
}