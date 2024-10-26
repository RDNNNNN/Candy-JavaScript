# 編號：CANDY-001

### 程式語言：JavaScript

### 題目：找出陣列裡最小的兩個值的總和

### 例如：

`[15, 28, 4, 2, 43] 印出 6`

`[23, 71, 33, 82, 1] 印出 24`

```js
function sumOfSmallestValues(arr) {
  const newArr = arr.sort((a, b) => a - b);
  return newArr[0] + newArr[1];
}
// 使用 sort() 做排序, 但預設是字串排序, 需要改成數字排序
// 結果為 < 0, 則等於 a < b, 結果為 > 0, 則等於 a > b, 結果為 == 0, 則等於 a == b
// 回傳排序後的數字
const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
```

# 編號：CANDY-002

### 程式語言：JavaScript

### 題目：請寫一小段程式，印出連續陣列裡缺少的字元

```js
const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  for (let i = 0; i < chars.length - 1; i++) {
    const char = chars[i].charCodeAt();
    const nextChar = chars[i + 1].charCodeAt();
    if (nextChar - char !== 1) {
      return String.fromCharCode(char + 1);
    }
  }
}
// 先寫一個 for 迴圈
// 設定索引值 i 跟後面的 i + 1 為變數
// 因為每個索引只有一個字所以 charCodeAt() 的內容可帶 0 或是不帶
// 用 charCodeAt() 轉換後的數字間隔會是 1, 缺少的字間隔會是 2
// 所以用判斷式不等於 1 的話就是缺少的值
// 使用 String.fromCharCode() 回傳後面的值

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
```
