/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 二叉树的最近公共祖先
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
    if (root === null) return false;
    const inCurr = root.val === p.val || root.val === q.val;
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);
    if ((lson && rson) || (inCurr && (lson || rson))) {
      ans = root;
    }
    return lson || rson || inCurr;
  };
  dfs(root, p, q);
  return ans;
};
