function binaryTreeNode(val = -1, left = null, right = null) {
  [this.val, this.left, this.right] = [val, left, right]
}

function binaryTree() {
  this.root = null
  this.getTree = function (arr,index=0) {
    if (index >= arr.length || arr[index] == -1) return null
    let node = new binaryTreeNode(arr[index])
    node.left = this.getTree(arr, index * 2 + 1)
    node.right = this.getTree(arr, index * 2 + 2)
    return node
  }
}

module.exports = {binaryTree}

