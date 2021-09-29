/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0)
  if (sum % 2 !== 0) return false
  sum = sum / 2
  const dp = Array(sum + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--) {
      if (j - nums[i] >= 0) {
        dp[j] = dp[j] || dp[j - nums[i]]
      }
    }
  }
  return dp[sum]
};
// @lc code=end

/**
 * 空间未优化版
 * @param {number[]} nums 
 */
function canPartition(nums) {
  if (nums.length < 2) return false
  let sum = nums.reduce((acc, curr) => acc + curr, 0)
  if (sum % 2 !== 0) return false
  
  const m = nums.length,
        half = sum / 2,
        dp = Array(m + 1)
          .fill(0)
          .map(() => Array(half + 1).fill(false))
  
  for (let row of dp) {
    row[0] = true
  }
  
  // dp[i][j] 的含义是数组前 i 个元素中是否有子集的和为 j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= half; j++) {
      if (j - nums[i - 1] < 0) {
        // 当前元素大于j, dp[j][j] 继承上一行结果
        dp[i][j] = dp[i - 1][j]
      } else {
        // 当前元素小于j, 若上一行为true,则直接为true, 否则依赖dp[i - 1][j - nums[i - 1]]的结果
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  return dp[m][half]
}
