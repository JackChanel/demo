/* 
  题目
    数组的元素可能是数组，这样一层层嵌套，可能得到一个嵌套很深的数组，
    数组降维要做的事就是把嵌套很深的数组展开，一般最后得到一个一维数组，
    其中的元素都是非数组元素，
    比如数组[1,[2,3,[4,5],6],7,8]降维展开后是[1,2,3,4,5,6,7,8]

    https://www.cnblogs.com/bidong/p/15496161.html
*/


const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], undefined, undefined, 5, "string", {
  name: "unknown"
}];


// 递归法 实现指定深度降维
function flat(arr, depth = 1) {
  if (depth <= 0) {
    return arr
  }
  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // res = res.concat(flat(item, depth - 1))
      res = [...res, ...flat(item, depth - 1)]
    } else {
      res.push(item);
    }
  })
  // 返回的是一个降维一次的数组
  return res
}



// reduce 实现指定深度降维
function flat(arr, depth = 1) {
  return depth > 0 ?
    arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flat(cur, depth - 1) :
      cur), []) :
    arr.filter((item) => item !== undefined)
}



// 使用栈 实现指定深度降维
function flat(arr) {
  let res = [];
  const stack = [].concat(arr);
  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      // 用扩展运算符展开一层
      stack.push(...item);
    } else {
      item !== undefined && res.unshift(item);
    }
  }
  return res;
}



// 使用栈 实现可指定深度降维
function flat(arr, depth = 1) {
  if (depth <= 0) {
    return arr.filter((item) => item !== undefined);
  }
  let res;
  let queue = [].concat(arr);
  while (depth > 0) {
    res = [];
    queue.forEach((item) => {
      if (Array.isArray(item)) {
        // 注意用扩展运算符将数组展开前先用filter方法去掉空位
        res.push(...item.filter((e) => e !== undefined));
      } else {
        res.push(item);
      }
    });
    depth--;
    queue = res;
  }
  return res;
}

console.log(flat(arr, 1));