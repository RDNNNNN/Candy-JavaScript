// 編號：CANDY-022
// 程式語言：JavaScript
// 題目：實作 Queue 資料結構

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    if (element !== undefined) {
      this.items.push(element);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  get length() {
    return this.items.length;
  }
}
// 使用陣列儲存隊列的元素
// 將元素加入隊列的尾端
// 移除並返回隊列的前端元素
// 陣列的 shift 方法移除並返回第一個元素
// 獲取隊列中元素的數量

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
console.log(queue.length); // 印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 印出 0
