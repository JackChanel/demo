function action(args){
  console.log(args);
}

// 模拟回调函数
function callbackFunction(url,port,callback){
  let data = {
    url:`https://${url}:${port}`,
    msg:'getData'
  }
  if(true)callback(data)
}

// 可以调用业务函数 action()
callbackFunction('www.baidu.com','8080',action)
// 也可以直接使用匿名函数
callbackFunction('www.baidu.com','8080',(data)=>{
  console.log(data);
})