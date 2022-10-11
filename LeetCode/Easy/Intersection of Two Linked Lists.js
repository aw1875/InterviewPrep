/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let tempA = headA, tempB = headB;

    while (tempA != tempB) {
        tempA = !tempA ? headB : tempA.next;
        tempB = !tempB ? headA : tempB.next;
    }

    return tempA;
};
