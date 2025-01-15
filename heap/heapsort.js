function swap(array, index1, index2){
    let tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
}// exchange two elemnent function

function heapify(array, index, heapSize){
    let largest = index; //current biggest value
    let leftChild = 2 * index ; // 
    let rightChild = 2 * index + 1;
    
    if (leftChild < array.length && array[leftChild] > array[largest]){
        largest = leftChild;
    }

    if (rightChild < array.length && array[rightChild]> array[largest]){
        largest = rightChild;
    }
    if (largest !== index){ // 
        swap(array,index, largest);//
        heapify(array,largest,heapSize);
    }
}

function heapSort(array){
    const heapSize = array.length; 
    // max heap
    for (let i = Math.floor(heapSize / 2) - 1; i  >= 0; i--){
        heapify(array,i, heapSize) // re-heapify
    }
    // sorting heap
    for (let i = heapSize - 1; i >0 ; i--){
        swap(array, 0, i )
        heapify(array,0, i)
    }
}
let arr = [15, 5, 12, 14, 9, 10, 6, 2, 11, 1];

// 힙 정렬 호출
heapSort(arr);

// 결과 출력
console.log(arr);//
