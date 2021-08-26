/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0, high = nums.length - 1, middle
  
  while (low <= high) {
    middle = low + Math.floor((high - low) / 2)
    if (nums[middle] === target) return middle
    else if (nums[middle] > target) high = middle - 1
    else low = middle + 1
  }

  return -1
};
// @lc code=end

