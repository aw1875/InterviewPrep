/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];

    const traverse = (head) => {
        if (!head) return;
        stack.push(head.val);
        traverse(head.next);
    };

    traverse(head);

    return stack.join('') === stack.reverse().join('');
};
