/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length, n = text2.length

  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    let r = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      let c = text2[j - 1]
      if (r === c) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  return dp[m][n]
};
// @lc code=end


function longestCommonSubsequence_1(text1, text2) {
  let m = text1.length, n = text2.length

  const dp = Array(2).fill(0).map(() => Array(n + 1).fill(0))
  let currIndex = 1, lastIndex = 0
  for (let i = 1; i <= m; i++) {
    const r = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      const c = text2[j - 1]
      if (r === c) {
        dp[currIndex][j] = dp[lastIndex][j - 1] + 1
      } else {
        dp[currIndex][j] = Math.max(dp[lastIndex][j], dp[currIndex][j - 1])
      }
    }
    // 交换上一行和当前行的指针
    [ currIndex, lastIndex ] = [ lastIndex, currIndex ]
  }

  return dp[lastIndex][n]
}

longestCommonSubsequence_1('abcde', 'ace')
