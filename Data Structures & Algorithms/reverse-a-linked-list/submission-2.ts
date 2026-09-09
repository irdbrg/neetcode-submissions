/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let currNode = head;
        let prevNode = null;

        while(currNode) {
            const nextNode = currNode.next; 
            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        return prevNode;
    }
}
