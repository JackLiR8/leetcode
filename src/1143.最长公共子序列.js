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
  let m = text1.length,
    n = text2.length;
  const dp = Array(m)
    .fill(0)
    .map(() => {
      const row = Array(n).fill(0);
      row[-1] = 0;
      return row;
    });

  dp[-1] = Array(n).fill(0);
  dp[-1][-1] = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end
