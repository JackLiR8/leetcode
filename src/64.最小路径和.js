/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array(rows).fill(0).map(() => Array(cols).fill(0))
  dp[0][0] = grid[0][0]

  for (let r = 1; r < rows; r++) {
    dp[r][0] = dp[r - 1][0] + grid[r][0];
  }

  for (let c = 1; c < cols; c++) {
    dp[0][c] = grid[0][c] + dp[0][c - 1];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c]) + grid[r][c];
    }
  }
  return dp[rows - 1][cols - 1];
};
// @lc code=end

// 初始提交
function minPathSum1() {
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      if (i === 0) {
        grid[i][j] += Number(grid[i][j - 1]);
      } else if (j === 0) {
        grid[i][j] += Number(grid[i - 1][j]);
      } else {
        grid[i][j] += Math.min(
          Number(grid[i][j - 1]),
          Number(grid[i - 1][j])
        );
      }
    }
  }
  return grid[n - 1][m - 1];
}
