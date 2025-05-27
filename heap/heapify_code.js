export function swap(array, index1, index2){
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
    }// exchange two elemnent function

export function heapify(array, index, heapSize){
    let largest = index; //current biggest value
    let leftChild = 2 * index + 1; // 
    let rightChild = 2 * index + 2;
    
    if (leftChild < heapSize && array[leftChild] > array[largest]){
        largest = leftChild;
    }

    if (rightChild < heapSize && array[rightChild]> array[largest]){
        largest = rightChild;
    }
    if (largest !== index){ // 
        swap(array,index, largest);//
        heapify(array,largest,heapSize);
    }
}