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