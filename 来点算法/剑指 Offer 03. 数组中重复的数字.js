/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = new Array(nums.length).fill(false)
  for (val of nums) {
    if (map[val]) {
      return val
    } else {
      map[val] = true
    }
  }
};
debugger
findRepeatNumber([2, 3, 1, 0, 2, 5, 3])