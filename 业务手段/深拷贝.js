function deepCopy(target) {
  // 如果是引用类型，返回遍历一次的结果
  if (target instanceof Object) {
    let group = {}
    for (let key in target) {
      let item = target[key]
      if (item instanceof Object) {
        if (Array.isArray(item)) {
          group[key] = ArrayPart(item)
        } else {
          group[key] = deepCopy(target[key])
        }
      } else {
        group[key] = item
      }
    }
    return group
  }
  // 如果是常量型，返回常量
  else {
    return target
  }
}

function ArrayPart(target) {
  let res = []
  for (let i in target) {
    let item = target[i]
    if (item instanceof Object) {
      if (Array.isArray(item)) {
        res.push(ArrayPart(item))
      } else {
        res.push(deepCopy(item))
      }
    } else {
      res.push(item)
    }
  }
  return res
}

let testObj = {
  a: 1,
  b: 2,
  c: {
    c1: 1,
    c2: 2,
    c3: [1, 2, 3, [1, 2, 3], {
      cc: 1,
      cb: 2
    }]
  }
}


cloned = deepCopy(testObj);
testObj.c.c3[3][1]=1000
console.log(testObj,cloned);
