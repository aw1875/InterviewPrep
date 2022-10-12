/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if (!head1 || !head2) return head1 ? head1 : head2;
    if (head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2);
        return head1;
    } else {
        head2.next = mergeLists(head2.next, head1);
        return head2;
    }
}
