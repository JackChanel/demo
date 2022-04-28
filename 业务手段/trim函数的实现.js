/* 
  描述
    trim() 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。
  题解
    扫描两边的空格，利用substring去除空格，关键是找到索引位置
*/

function trim(str) {
  let begin = 0
  let end = str.length - 1
  while (begin <= end && str.charAt(begin) == ' ') {
    begin++
  }
  while (begin <= end && str.charAt(end) == ' ') {
    end--
  }
  console.log(begin, end);
  return str.substring(begin,end + 1)
}