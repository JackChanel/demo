/* 
  推荐演示视频：https://www.bilibili.com/video/BV1Eb41147dK

  堆结构用数组表示，
  给出未构建最大堆数据 [4,3,1,6,4,7]
*/

// 堆调整(构建最大堆)
function heapify(tree, size, parentIndex) {
  let firstChild = parentIndex * 2 + 1
  let secondChild = firstChild + 1
  // 是否子元素溢出
  if (firstChild > size || secondChild > size) {
    return
  }
  // 递归出口
  if (parentIndex >= size) {
    return
  }

  let maxIndex = parentIndex
  if (tree[firstChild] > tree[maxIndex]) {
    maxIndex = firstChild
  }
  if (tree[secondChild] > tree[maxIndex]) {
    maxIndex = secondChild
  }
  if (maxIndex != parentIndex) {
    swap(tree, maxIndex, parentIndex)
    heapify(tree, size, maxIndex)
  }
}

// 原地交换元素
function swap(tree, i, j) {
  let tmp = tree[i]
  tree[i] = tree[j]
  tree[j] = tmp
}


// 构建堆
// 从最后一个父节点开始遍历向上构建堆
function build_heap(tree) {
  let lastParentIndex = parseInt(tree.length / 2) - 1
  for (let i = lastParentIndex; i >= 0; i--) {
    heapify(tree, tree.length, i)
  }
}

// 堆排序
// 取出堆顶放置在最后一位，然后堆前面的元素重建堆
function heap_sort(tree) {
  build_heap(tree)
  for (let i = tree.length - 1; i >= 0; i--){
    swap(tree,i,0)
    heapify(tree,i-1,0)
  }
}


function main() {
  let tree = [3,2,1,5,6,4]
  heap_sort(tree)
  console.log(tree);
}

main()