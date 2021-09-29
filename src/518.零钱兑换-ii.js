/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i]]
      }
    }
  }
  return dp[amount]
};
// @lc code=end

/**
 * 空间未优化版本
 * @param {number} amount 
 * @param {number[]} coins 
 * @returns 
 */
function change1(amount, coins) {
  const m = coins.length
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(amount + 1).fill(0))

  for (let row of dp) {
    row[0] = 1
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j]
      } else {
        // dp[i][j - coins[i - 1]] 覆盖了当前行的硬币，这是可重复使用的表现
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      }
    }
  }

  return dp[m][amount]
}
