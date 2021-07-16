/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let ans = []
  nums.sort((a, b) => a - b)
  
  for (let first = 0; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }

    for (let second = first + 1; second < nums.length; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      let four = nums.length - 1,
          diff = target - nums[first] - nums[second]
      
      for (let third = second + 1; third < nums.length; third++) {
        if (third > second + 1 && nums[third] === nums[third - 1]) {
          continue
        }

        while (third < four && nums[third] + nums[four] > diff) {
          four--
        }

        if (third === four) break

        if (nums[third] + nums[four] === diff) {
          ans.push([
            nums[first],
            nums[second],
            nums[third],
            nums[four],
          ])
        }
      }
    }
  }

  return ans
};
// @lc code=end

