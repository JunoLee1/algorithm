function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next; // dummy.next가 진짜 head
}
function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


var reverseLinkedLIst_II = function(head, left, right){
    const dummy = new ListNode(0);
    let prev = dummy;
    prev.next = head;

    // move to left - 1
    for(let i = 0; i < left - 1; i++){
        prev = prev.next;
    }


    let start = prev.next;
    let then = start.next
    for(let i = 0; i < right - left; i++){
        start.next = then.next; // 2 -> 4  
        then.next = prev.next; // 3 -> 2 
        prev.next = then;   // 1 -> 3
        then = start.next;//  cusor change
    }
    return dummy.next;
}
const head = arrayToList([1, 2, 3, 4, 5]);
const newHead = reverseLinkedLIst_II(head, 2, 4);
console.log(listToArray(newHead)); // 👉 [1, 4, 3, 2, 5]