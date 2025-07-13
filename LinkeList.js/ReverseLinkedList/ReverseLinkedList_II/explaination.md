# Problem name  #92 Reverse linked list II

## Problem definition:
    Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


## Approaching:

    How to reverse it:
        1. connect left and right node.

        2. the next of prev node point at mid node

        3. the next of mid node aim to  prev.next 

        4.  move then node cursor to start.next 


## code
```js

function ListNode(val, next = null){
    this.val = val;
    this.next = next;
}


function arrayToList(arr){
    const dummy = new ListNode(0);
    let current = dummy;

    for(let val of arr){
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}


function listToArray(head){
    const result = []
    while(head){
        result.push(head.val)
        head = head.next
    }
    return result;
}


var reverseLinkedList_II = function(head, left, right){

    const dummy = new ListNode(0);
    let prev = dummy;
    prev.next = head;


    for(let i = 0; i < left - 1; i++){
        prev = prev.next
    }

    const start = prev.next;
    const then = start.next;

    for(let i = 0; i < right - left; i++){
        start.next = then.next;
        then.next = prev.next
        prev.next = then;
        then = start.next
    }
    return dummy.next
}

