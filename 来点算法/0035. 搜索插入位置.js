/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let length = nums.length
  let l = 0
  let r = length - 1
  let mid = 0
  while (r >= l) {
    mid = Math.floor(l + (r - l) / 2)
    if (target > nums[mid]) l = mid + 1
    else if (target < nums[mid]) r = mid - 1
    else return mid
  }
  return l
};

debugger
console.log(searchInsert(
  [1, 3, 5, 6], 2));