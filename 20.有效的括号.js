/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false

  const stack = [],
        map = new Map([
          [']', '['],
          ['}', '{'],
          [')', '('],
        ])
  
  for (let ch of s) {
    if (map.has(ch)) {
      if (stack.length === 0 || stack[stack.length - 1] !== map.get(ch)) {
        return false
      }
      stack.pop()
    }
    else {
      stack.push(ch)
    }
  }
  
  return stack.length === 0
};
// @lc code=end

