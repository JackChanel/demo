function add(a,b,c){
  return a+b+c
}

function curry(func){
  // ...args缓存的是柯里化函数的参数
  let curried = (...args)=>{
    if(args.length<func.length){
      // 若参数未满足则返回带有合并了缓存参数的函数对象
      return (...rest)=>curried(...args,...rest)
    }
    return func(...args)
  }
  return curried
}
let curriedAdd = curry(add)

console.log(curriedAdd(1)(2,3));

