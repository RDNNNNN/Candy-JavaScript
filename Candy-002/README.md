## 編號：CANDY-002

### 程式語言：JavaScript

#### 題目：請寫一小段程式，印出連續陣列裡缺少的字元

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

// 先寫出一個 for 迴圈
// 設定索引值 i 跟後面的 i + 1 為變數
// 因為每個索引只有一個字所以 charCodeAt() 的內容可帶 0 或是不帶
// 使用 charCodeAt() 轉換後的數字間隔會是 1, 缺少的字間隔會是 2
// 所以用判斷式不等於 1 的話就是缺少的值
// 使用 String.fromCharCode() 回傳後面的值

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
```