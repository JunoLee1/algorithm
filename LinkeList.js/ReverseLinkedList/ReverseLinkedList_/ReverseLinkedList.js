var reverseList = function(head) {

    let prev = null;
    let crnt = head;

    while(crnt !== null) {
        // save next pointer
        // the next of current node point to previous node
        // swich previous node and current node
        // switch current node and next node
        let next = crnt.next;
        crnt.next = prev
        prev = crnt;
        crnt = next;
    }
    return prev
}