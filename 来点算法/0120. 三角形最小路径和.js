/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let row = triangle.length
    let dp = []
    for (let i = 0; i < row; i++) {
        dp[i] = new Array(i + 1).fill(0)
    }
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < row; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (j == 0) { dp[i][j] = dp[i - 1][j] + triangle[i][j] } else if (j == dp[i].length - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp[row - 1])
};
minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
])