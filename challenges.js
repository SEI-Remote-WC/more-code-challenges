/*-----------------------------------------------------------------------------
Challenge: 01 - twoSum

Difficulty - Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.  Name the function twoSum.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

The indices must be returned in the same relative order that they appear within the array.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length 
Only one valid answer exists.

-----------------------------------------------------------------------------*/
// Your solution for 01- here:
// [0,1,3,7,5]
// i loop 0
  // j loop 1, 3, 7, 5
// i loop 1
  // j loop 3, 7, 5
// target = 4 
// 1,2
function twoSum(nums,target){
  for( let i = 0; i< nums.length; i++ ){
    for( let j=i+1; j< nums.length; j++){
      if (nums[i]+nums[j] === target){ 
        return [i,j]
      }
    }   
  }
}

// [0,1,3,7,5]
// target 4
function twoSum(nums, target) {
  let vals = {}
  for (let i=0; i< nums.length; i++) {
    if (target - nums[i] in vals){
      return [vals[target-nums[i]], i]
    } else {
      vals[nums[i]] = i
    }
  }
}
