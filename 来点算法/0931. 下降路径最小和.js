/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let row = matrix.length
  let column = matrix[0].length
  let dp = new Array(row).fill(0).map(() => new Array(column).fill(0))
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i == 0) {
        dp[i][j] = matrix[i][j]
      } else if (j == 0) {
        if (column == 1) dp[i][j] = matrix[i][j] + dp[i - 1][j]
        else dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1])
      } else if (j == column - 1) {
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j])
      } else {
        dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1])
      }
    }
  }
  return Math.min(...dp[row - 1])
};

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9]
])