/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = []
  nums.sort((a, b) => a - b)

  for (let first = 0; first < nums.length; first++) {
    // 和上一循环相等，跳过
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }

    let third = nums.length - 1,
        target = -nums[first]

    for (let second = first + 1; second < nums.length; second++) {
      // 和上一循环相等，跳过
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      while (second < third && nums[second] + nums[third] > target) {
        third--
      }
      
      // second 等于 third，循环结束
      if (second === third) break

      if (nums[second] + nums[third] === target) {
        ans.push([nums[first], nums[second], nums[third]])
      }
    }
  }

  return ans
};
// @lc code=end

