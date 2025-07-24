/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 /*
    *problem def: Reorder the list to be on the following form:
        origin     L0 → L1 → … → Ln - 1 → Ln

        reordered    L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …


    * Approach :

        sum(1, 100) === sum(2n ,50) + sum(2n + 1, 49)

        1. cut off half of linked list

        2. reverse the linked list after middle 

        3. merge the two linked list

  */
var reorderList = function(head) {
    let slow = head;
    let fast = head;

    if (!head || !head.next) return;// linked list안의 아이템 수가 2개 이하인 경우 조기 리턴

    // 절반으로  링크드리스트 자르기
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 자른 후, 나머지 링크드리스트 아이템 역순시키기
    let prev = null 
    let curr = slow;
    while(curr){
        let next = curr.next;

        curr.next = prev
        prev = curr
        curr = next 
    }

    // 역순한 링크드리스트(prev)와 나머지 링크드리스트 병합
    let first = head; // first pointer
    let second = prev;// second pointer

    while(second.next) {
        let tmp_1 = first.next 
        let tmp_2 = second.next; 

        first.next = second // first 포인터를 second 포인터에다 연결
        second.next = tmp_1 // 그후 second 포인터를 fisrt 포인터 다음에 연결

        first = tmp_1
        second = tmp_2
    }
};