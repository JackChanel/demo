const log = function (title, ...msg) {
  console.log(`【${title}】:`, msg);
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  let row = grid.length
  let column = grid[0].length
  let dp = new Array(row).fill(0).map(() => new Array(column).fill(0))
  let minIndex1 = 0,
    minIndex2 = 0
  for (let i = 0; i < row; i++) {
    if (i > 0) {
      [minIndex1, minIndex2] = [...getMinIndex(dp[i])]
    }

    for (let j = 0; j < column; j++) {
      if (i == 0) dp[i][j] = grid[i][j]
      else {
        if (j == minIndex1) {
          // 用index2
          dp[i][j] = grid[i][j] + dp[i - 1][minIndex2]
        } else {
          // 用index1
          dp[i][j] = grid[i][j] + dp[i - 1][minIndex1]
        }
      }
    }
  }
  console.log(dp);
  console.log(Math.min(...dp[row - 1]));
  return Math.min(...dp[row - 1])
};

function getMinIndex(arr) {
  let sorted = [...arr]
  sorted = sorted.sort((a, b) => a - b)
  console.log(arr);
  let res = [arr.indexOf(sorted[0]), arr.indexOf(sorted[1])]
  return res
}
debugger
minFallingPathSum([
  [-7, 6, 4, -4, -3],
  [3, 4, 2, 5, 1],
  [9, -7, 8, 5, -1],
  [5, -4, 7, 3, -1],
  [9, 8, 5, -4, 6]
])

// -18