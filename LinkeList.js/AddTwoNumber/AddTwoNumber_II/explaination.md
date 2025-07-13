# Problem name: #445 Add two numbers II

## Problem definition:

## Approaching :
    stack, Linked List

    this is because the problem asked about the sum of two forwarded linked list.



## Code:
```js


var addTwoNumbers = function(l1, l2){

    const stack_1 = [];
    const stack_2 = [];
    
    // add it in stack
    while(l1 !== null){
        stack_1.push(l1.val)
        l1 = l1.next
    }

     while(l2 !== null){
        stack_2.push(l2.val)
        l2 = l2.next
    }

    let carry = 0
    let head = null;

    
    // operator
    while (stack_1.length > 0 || stack_2.length > 0 || carry > 0){
        // set as carry value
        let sum = carry

        if(stack_1.length > 0) sum += stack_1.pop(); // if it is possible for the value to pop, sum each value 
        if(stack_2.length > 0) sum += stack_2.pop();


        let digit = sum % 10;
        carry = Math.floor(sum / 10);


        const node = new ListNode(digit);
        node.next = head;   
        head = node;


    }
    return head;
}