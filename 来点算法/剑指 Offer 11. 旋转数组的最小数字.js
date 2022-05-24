/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (numbers.length == 1) return numbers[0]
  let l = 0;
  let r = numbers.length - 1
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2)
    if (numbers[mid]>numbers[r]) {
      l = mid + 1
    }
    else if (numbers[mid] < numbers[r]) {
      r= mid
    }
    else r--
  }
  return numbers[l]
};


// debugger
console.log(minArray(
  [1,3,5]));