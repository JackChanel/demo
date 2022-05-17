/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (numbers.length = 1) return numbers[0]
  let l = 0;
  let r = nums.length - 1
  let mid
  while (l > r) {
    mid = l + Math.floor((r - l) / 2)
    if (nums[mid + 1] < nums[mid]) return mid + 1
    if (nums[mid + 1] >= nums[mid]) l = mid + 1
  }
};

debugger
console.log(minArray(
  [2, 2, 2, 0, 1]));
