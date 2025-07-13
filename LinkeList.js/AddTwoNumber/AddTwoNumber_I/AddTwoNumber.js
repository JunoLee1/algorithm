var addTwoNumbers = function(l1, l2){
    /* 
        problem def:
        approach : 
            sum = l1.val + l2.val + carry;
            carry = previous sum / 10
    */
    
    const dummy = new ListNode(0);
    let crnt = dummy;
    let carry = 0;
    let sum = 0
    while(l1 !== null || l2 !== null || carry > 0){
        // if l1.value is not null, keep going to down
        sum = carry // fresh
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val
            l2 = l2.next;
        }
        
        let digit = sum % 10
        carry = Math.floor(sum /10);
        crnt.next = new ListNode(digit)
        crnt = crnt.next;
    }
    return dummy.next
}