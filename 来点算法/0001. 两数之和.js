/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let storeMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    if (storeMap.has(k)) {
      return [storeMap.get(k), i]
    }
    storeMap.set(nums[i], i)
  }
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6))