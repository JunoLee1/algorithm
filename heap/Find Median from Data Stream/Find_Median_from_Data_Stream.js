class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        const n = this.heap.length;
        if (n === 0) return null;

        const top = this.heap[0];
        const end = this.heap.pop();

        if (n === 1) return top;

        this.heap[0] = end;
        this._heapifyDown();
        return top;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] > this.heap[idx]) {
                [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
                idx = parentIdx;
            } else break;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const n = this.heap.length;

        while (true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let smallest = idx;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = new MinHeap(); // 내부에서 minHeap을 쓰되, 부호 반전
    }

    push(val) {
        this.heap.push(-val);
    }

    pop() {
        return -this.heap.pop();
    }

    peek() {
        return -this.heap.peek();
    }

    size() {
        return this.heap.size();
    }
}

class MedianFinder {
    constructor() {
        this.small = new MaxHeap(); // left half (max heap)
        this.large = new MinHeap(); // right half (min heap)
    }

    addNum(num) {
        this.small.push(num);
        this.large.push(this.small.pop());

        if (this.small.size() < this.large.size()) {
            this.small.push(this.large.pop());
        }
    }

    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.peek();
        } else {
            return (this.small.peek() + this.large.peek()) / 2;
        }
    }
}
