// 二叉树节点的定义
function TreeNode(val = 0, left = null, right = null) {
  [this.val, this.left, this.right] = [val, left, right]
}

// 二叉树创建
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] == -1) return null
  let node = new TreeNode(arr[index])
  node.left = createTree(arr, index * 2 + 1)
  node.right = createTree(arr, index * 2 + 2)
  return node
}

// 定义队列
class Queue {
  constructor() {
    this.arr = []
  }
  set(val) {
    this.size++
    this.arr.unshift(val)
  }
  get() {
    this.size--
    return this.arr.pop()
  }
  size = 0
}



function levelOrder(root) {
  let queue = new Queue()
  let printer = []
  queue.set(root)
  while (queue.size > 0) {
    let levelSize = queue.size
    let tmp = []
    for (let i = 0; i < levelSize; i++) {
      let node = queue.get()
      tmp.push(node.val)
      if (node.left) queue.set(node.left)
      if (node.right) queue.set(node.right)
    }
    printer.push(tmp)
  }
  return printer
}

let root = createTree([1, 2, 3, 4, 5, 6, -1])
console.log('层序', levelOrder(root));