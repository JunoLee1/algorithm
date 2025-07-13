var addTwoNumbers = function(l1, l2){
    /*
        1. problem defition:

        2. Approaching:
            1) Using stacks, reversing the each linked list.
            
            2) Popped the elements, sum each other.

    */
    const l1_stack = [];
    const l2_stack = [];
    let carry = 0;
    let sum = 0
   
    while(l1 !== null){
        l1_stack.push(l1.val);
        l1 = l1.next;
   }


   while(l2 !== null){
        l2_stack.push(l2.val);
        l2 = l2.next;
   }
   

   let head = null;
   while(l1_stack.length > 0 || l2_stack.length > 0 || carry > 0){

        let x = (l1_stack.length > 0) ? l1_stack.pop() : 0;
        let y = (l2_stack.length > 0) ? l2_stack.pop() : 0;

        sum = x + y + carry;
        carry = Math.floor(sum/10);

        let node = new ListNode(sum % 10)
        node.next = head // crnt node point at new node
        head = node // change the cursor
   }
   return head
}