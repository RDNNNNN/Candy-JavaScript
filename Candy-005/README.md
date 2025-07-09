## 編號：CANDY-005

### 程式語言：JavaScript

#### 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

```js
function squareDigits(num) {
  const splitNum = num.toString().split("");
  const calcNum = splitNum.map((x) => x * x);
  return calcNum.join("");
}

// 使用 toString() 轉成字串
// 再使用 split() 分割內容, 如果內容是空字串則會每個字符都被分割
// 設定一個常數使用 map() 將分割的內容做平方運算
// 最後使用 join() 組合並回傳值, join() 預設會有, 隔開所以使用空字串去除

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
```