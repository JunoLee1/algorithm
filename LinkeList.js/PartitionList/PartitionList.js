var partition = function(head, x){
    /*
        * Problem Definition:
            Input -> head, x
            
            OutPut ->  partition it such that all nodes less than x come before nodes greater than or equal to x.

        * Approaching:
            1. Create the two dummy head 
                -left_dummy for < "x"

                - right_dummy for >= "x"

            2. traverse the oringinal list
            
            3. large_node's next should terminate to prevent including the tail of original list.

            4. connect left tail to right dummy.next

            5 return the whole linked list 
    */


    const left_dummy = new ListNode(0);
    const right_dummy = new ListNode(0);

    let small_node = left_dummy;
    let large_node= right_dummy;


    while(head !== null){
        if(head.val < x){
            small_node.next = head;
            small_node = small_node.next;
            
        }else if(head.val >= x){
            large_node.next = head;
            large_node = large_node.next;
        }
        head = head.next;

    }
    large_node.next = null
    small_node.next = right_dummy.next;
    return left_dummy.next
}