/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0
    
  let leftMaxHeight = maxDepth(root.left),
      rightMaxHeight = maxDepth(root.right)
  
  return Math.max(leftMaxHeight, rightMaxHeight) + 1
};
// @lc code=end


function maxDepthBFS() {
  if (root === null) return 0
  const pool = [root]
  let maxDepth = 0, node = null

  while (pool.length > 0) {
    let size = pool.length
    while (size > 0) {
      node = pool.shift()
      if (node.left) pool.push(node.left)
      if (node.right) pool.push(node.right)
      size--
    }
    maxDepth++
  }

  return maxDepth
}

