/**
 * @description 组合
 * https://leetcode-cn.com/problems/combinations/solution/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const dfs = (select, remain) => {
    if (select.length === k) {
      return res.push(select);
    }
    const remainCopy = remain.slice(0);
    while (remainCopy.length) {
      const selectCopy = select.slice(0);
      selectCopy.push(remainCopy.shift());
      dfs(selectCopy, remainCopy);
    }
  };
  dfs(
    [],
    Array.from({ length: n }, (v, i) => i + 1)
  );
  return res;
};
