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

// 二叉树中序遍历,stack法
function midRootIterates(root) {
  let printer = []
  let stack = []
  while (root || stack.length > 0) {
    // 找左子树，直到Null
    while (root) {
      stack.push(root)
      root = root.left
    }
    // 弹出节点并打印后到右子树
    root = stack.pop()
    printer.push(root.val)
    root = root.right
  }
  return printer
}

// 二叉树先序遍历,stack法
function firstRootIterates(root) {
  let printer = []
  let stack = []
  while (root || stack.length > 0) {
    while (root) {
      printer.push(root.val)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return printer
}

// 二叉树后序遍历,stack法
function lastRootIterates(root) {
  let printer = []
  let stack = []
  let preNode
  while (root || stack.length > 0) {
    // 访问最深左子树
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // 无右子树||右子树是否已被访问
    if (!root.right || root.right == preNode) {
      printer.push(root.val)
      preNode = root
      root = null
    }
    // 有右子树
    else {
      stack.push(root)
      root = root.right
    }
  }
  return printer
}

// 执行区
let root = createTree([1, 2, 3, 4, 5, 6, -1])
console.log('中序', midRootIterates(root));
console.log('先序', firstRootIterates(root));
console.log('后序', lastRootIterates(root));