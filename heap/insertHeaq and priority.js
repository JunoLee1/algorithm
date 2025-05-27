import * as heapify_code from './heapify_code.js';
function reverse_heapify(array, index){
    let parent_index = Math.floor(index / 2)
    
    if (parent_index > 0 && array[index]> array[parent_index]){
        heapify_code.swap(array, index, parent_index)
        reverse_heapify(array, parent_index)
    }

}
class priorityQueue{
    constructor(){
        this.heap = [null];
    };
    insert(data) {
        this.heap.push(data);
        reverse_heapify(this.heap,this.heap.length -1);
    }
    extract_max(){
        heapify_code.swap(this.heap,1,this.heap.length-1);
        const max_value = this.heap.pop();
        heapify_code.heapify(this.heap,1,this.heap.length)
        return max_value;
    }
}
const priority_queue = new priorityQueue();
priority_queue.insert(6);
priority_queue.insert(9);
priority_queue.insert(11);