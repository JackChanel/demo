// // 二维数组创建模版函数
// function twoDimensionalArray(row, column) {
//   return new Array(row).fill(0).map(() => new Array(column).fill(0))
// }

// var uniquePaths = function (m, n) {
//   let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
//   dp.forEach((item) => {
//     item[0] = 1
//   })
//   let e = [1, 0, 0, 0]
//   e.forEach(function (val, index) {
//     e[index] = 1
//   })
//   console.log(e)
// }
// uniquePaths(5, 2)

let arr = [1,23,4]
let a,b,c
[a,b,c] = [...arr]
console.log(a,b,c);