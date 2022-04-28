/**
 * @param {Array} cost
 * @return {number}
 */
var minCosts = function (cost) {
  let dp = []
  let length = cost.length
  if (length <= 2) return cost[length - 1]
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
  }
  return Math.min(dp[length - 1], dp[length - 2])
}

minCosts([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
minCosts([10, 1, 15, 20, 2, 1])