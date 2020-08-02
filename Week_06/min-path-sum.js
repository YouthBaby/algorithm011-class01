/**
 * @description 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length, n = grid[0] ? grid[0].length : 0;
  if (m === 0 || n === 0) return 0;

  let dp = new Map();

  dp.set('0-0', grid[0][0]);

  function get_sum(i, j) {
    if (i < 0 || j < 0) return Number.MAX_SAFE_INTEGER;
    if (dp.has(i + '-' + j)) return dp.get(i + '-' + j);
    let itemMin = grid[i][j] + Math.min(get_sum(i - 1, j), get_sum(i, j - 1));
    dp.set(i + '-' + j, itemMin);
    return itemMin;
  }

  return get_sum(m - 1, n - 1);
}
