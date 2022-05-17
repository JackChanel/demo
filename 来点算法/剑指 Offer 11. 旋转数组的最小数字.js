/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (numbers.length == 1) return numbers[0]
  let l = 0;
  let r = numbers.length - 1
  let mid
  while (l < r) {
    mid = l + Math.floor((r - l) / 2)
    if (numbers[mid + 1] < numbers[mid]) return numbers[mid + 1]
    if (numbers[mid + 1] >= numbers[mid]) l = mid
  }
};


debugger
console.log(minArray(
  [1,3,5]));