/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let temp = new ListNode(0);
    temp.next = head;
    let pointer = temp;

    while (pointer.next && pointer.next.next) {
        let t1 = pointer;
        pointer = pointer.next;
        t1.next = pointer.next;

        let t2 = pointer.next.next;
        pointer.next.next = pointer;
        pointer.next = t2;
    }

    return temp.next;
};
