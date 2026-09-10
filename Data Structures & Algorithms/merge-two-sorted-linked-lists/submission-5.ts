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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let currNode1 = list1;
        let currNode2 = list2;

        const dummyNode = new ListNode();
        let nextNode = dummyNode;

        while(currNode1 && currNode2) { 
            if (currNode1.val <= currNode2.val) { 
                nextNode.next = currNode1; 
                nextNode = currNode1; 
                currNode1 = currNode1.next; 
            } else {
                nextNode.next = currNode2;
                nextNode = currNode2;
                currNode2 = currNode2.next;
            }
        }
        nextNode.next = currNode1 ?? currNode2;

        return dummyNode.next;
    }
}
