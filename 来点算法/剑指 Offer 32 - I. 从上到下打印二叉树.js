const {
  binaryTree
} = require("./utils/binaryTree")
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  const queue = new Queue()
  const res = []
  if (!root) return []
  queue.set(root)
  while (!queue.empty()) {
    let node = queue.get()
    res.push(node.val)
    node.left && queue.set(node.left)
    node.right && queue.set(node.right)
  }
  return res
};

function Queue() {
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
}

const bt = new binaryTree()
const root = bt.getTree([3, 9, 20, null, null, 15, 7, -1])

console.log(levelOrder(root));