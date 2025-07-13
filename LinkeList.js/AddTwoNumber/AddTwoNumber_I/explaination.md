# Problem name : Leetcode #2 Add two number

## problem definition:  Add the two numbers and return the sum as a linked list.

## Approaching : 
    the digits are stored in reverse order
    sum = l1.val + l2.val + carry

## Code:
```js
var addTwoNumbers = function(l1, l2){
    const dummy = new ListNode(0);
    let crnt = dummy;
    let carry = 0;
    let sum = 0
    while (l1 || l2 || carry > 0){
        sum = carry;

        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next
        }
        carry = Math.floor(sum / 10);
        crnt.next = ListNode(sum % 10);
        crnt = crnt.next

    }
    return dummy.next
}