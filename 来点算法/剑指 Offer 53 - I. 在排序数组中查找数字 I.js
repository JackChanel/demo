/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const targetIndex = binarySearch(nums, target)
  if (targetIndex == -1) return 0
  let count = 1
  let l = targetIndex != 0 ? targetIndex : -1
  let r = targetIndex != nums.length - 1 ? targetIndex : -1
  console.log(l, r)
  while (l >= 0 || r >= 0) {
    if (l) {
      nums[l - 1] == target ? (l--, count++) : l = -1
    }
    if (r) {
      nums[r + 1] == target ? (r++, count++) : r = -1
    }
  }
  return count
};

function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
console.log(search([1, 1],
  1));