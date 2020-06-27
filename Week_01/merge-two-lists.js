/**
 * @description Definition for singly-linked list.
 * @param {String} val
 * @param {ListNode|null} next
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @description 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let prevNode = new ListNode(-1, null);
  let prev = prevNode;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 || l2;
  return prevNode.next;
};
