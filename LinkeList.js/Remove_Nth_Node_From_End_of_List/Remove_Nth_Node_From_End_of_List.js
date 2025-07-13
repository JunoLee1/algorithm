var removeNthFromEnd = function(head, n) {
    /*
        * problem definition 
            Given head of a linked list, remove N-th node fron the end of Linked List


        * Approaching 
            Because of remove of n-th node, two pointer is way efficient then other.
            
     */
    
    const dummy = new ListNode(0, head) // dummy => head

    let fast = dummy;
    let slow = dummy; 
    

    // We move the fast pointer n + 1 steps ahead to create a gap of n between fast and slow.
    // This ensures that when fast reaches the end of the list, slow will be right before
    // the node that needs to be removed.
    for(let i = 0; i < n + 1; i++){
        fast = fast.next
    }

    //move two pointers untill fast poiner reach the end
    while(fast !== null){
        fast = fast.next;
        slow = slow.next;
    }


    // Remove the target node
    slow.next = slow.next.next;

    return dummy.next;
}