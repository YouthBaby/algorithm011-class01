/**
 * @description 有效的字母异位词
 * https://leetcode-cn.com/problems/valid-anagram/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let hash = Object.create(null);
  for (let letter of s) {
    if (!hash[letter]) {
      hash[letter] = 0;
    }
    hash[letter]++;
  }
  for (let letter of t) {
    if (typeof hash[letter] === 'undefined') {
      return false;
    }
    if (--hash[letter] < 0) {
      return false;
    }
  }
  return true;
}
