/**
 * @description 前K个高频元素
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let hashMap = new Map();
  for (let num of nums) {
    if (!hashMap.has(num)) {
      hashMap.set(num, 0);
    }
    let count = hashMap.get(num);
    hashMap.set(num, count + 1);
  }
  let bucket = [];
  for (let [num, count] of hashMap) {
    if (!bucket[count]) {
      bucket[count] = [];
    }
    bucket[count].push(num);
  }
  let res = [];
  for (let i = bucket.length - 1; i > 0 && res.length < k; i--) {
    if (bucket[i]) {
      res = res.concat(bucket[i]);
    }
  }
  return res.slice(0, k);
}
