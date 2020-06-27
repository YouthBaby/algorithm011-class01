/**
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * @description 接雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var left = 0,
      right = height.length - 1,
      left_max = 0,
      right_max = 0,
      count = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        count += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right]
      } else {
        count += right_max - height[right];
      }
      right--;
    }
  }
  return count;
};
