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

// 二叉树中序遍历,递归法
function midRootIterates(root) {
  let printer = []

  function accessTree(root) {
    if (!root) return
    accessTree(root.left)
    printer.push(root.val)
    accessTree(root.right)
  }
  accessTree(root)
  return printer
}

// 二叉树先序遍历,递归法
function firstRootIterates(root) {
  let printer = []
  function accessTree(root) {
    if (!root) return
    printer.push(root.val)
    accessTree(root.left)
    accessTree(root.right)
  }
  accessTree(root)
  return printer
}

// 二叉树后序遍历,递归法
function lastRootIterates(root) {
  let printer = []
  function accessTree(root) {
    if (!root) return
    accessTree(root.left)
    accessTree(root.right)
    printer.push(root.val)
  }
  accessTree(root)
  return printer
}

// 执行区
let root = createTree([1, 2, 3, 4, 5, 6, -1])
console.log('中序',midRootIterates(root));
console.log('先序',firstRootIterates(root));
console.log('后序',lastRootIterates(root));