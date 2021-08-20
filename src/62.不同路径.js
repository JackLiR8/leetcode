/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  let dp = Array(m)
    .fill(0)
    .map((item, index) => {
      return index === 0 ? Array(n).fill(1) : [1, ...Array(n - 1).fill(0)];
    });

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

function uniquePaths1() {
  const cur = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cur[j] += cur[j - 1];
    }
  }
  return cur[n - 1];
}
