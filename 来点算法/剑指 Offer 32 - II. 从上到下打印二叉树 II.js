const {
  binaryTree
} = require("./utils/binaryTree")
var levelOrder = function (root) {
  const queue = new Queuer()
  const res = []
  if (!root) return []
  queue.set(root)
  while (!queue.empty()) {
    let temp = []
    for (let i = queue.size(); i > 0; i--) {
      let node = queue.get()
      temp.push(node.val)
      node.left && queue.set(node.left)
      node.right && queue.set(node.right)
    }
    res.push(temp)
  }
  return res
};

function Queuer() {
  this.queue = []
  this.set = function (val) {
    this.queue.unshift(val)
  }
  this.get = function () {
    return this.queue.pop()
  }
  this.empty = function () {
    return this.queue.length === 0 ? true : false
  }
  this.getAll = function () {
    return this.queue.map((node) => {
      if (node.val) return node.val
    }).reverse()
  }
  this.size = function () {
    return this.queue.length
  }
}

debugger
console.log(levelOrder(new binaryTree().getTree([3,9,20,null,null,15,7])));