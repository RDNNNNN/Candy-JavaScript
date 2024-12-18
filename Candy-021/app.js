// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    if (element !== undefined) {
      this.items.push(element);
    }
  }

  pop() {
    return this.items.pop();
  }

  get size() {
    return this.items.length;
  }
}
// 用陣列來儲存堆疊的元素
// 添加元素到堆疊頂端
// 移除並返回堆疊頂端的元素
// 獲取堆疊中元素的數量

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0
