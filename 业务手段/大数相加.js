function bigSum(a, b) {
  let totalLength = Math.max(a.length, b.length)
  a = a.padStart(totalLength, '0')
  b = b.padStart(totalLength, '0')
  let sum = '' // 和
  let cal = 0 // 单位运算
  let carry = 0 // 进位
  for (let i = totalLength - 1; i >= 0; i--) {
    let x = parseInt(a[i])
    let y = parseInt(b[i])
    cal = (x + y + carry) % 10
    carry = parseInt((x + y + carry) / 10)
    sum = cal + sum
  }
  console.log('carry', carry);
  if (carry > 0) {
    sum = carry + sum
  }
  return sum
}

console.log(bigSum('1123', '9181'));