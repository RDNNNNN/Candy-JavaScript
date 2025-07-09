## 編號：CANDY-010

### 程式語言：JavaScript

#### 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數

範例：

```js
9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"
```

```js
function expandedForm(num) {
  const numStr = num.toString();
  const arr = [];

  for (let i = 0; i < numStr.length; i++) {
    let numPow = Math.pow(10, numStr.length - i - 1);
    if (numStr[i] != "0") {
      arr.push(`${numPow} X ${numStr[i]}`);
    }
  }
  return arr.join(" + ");
}

// 設定一個常數將數字轉為字串
// 設定一個常數為空陣列
// 使用 for 迴圈處理每一個字
// 使用 Math.pow() 將 10 設為次方基數, 字串長度為次方
// 因為陣列索引值會比長度少 1, 根據字串的長度減去不同的索引值還需要 -1
// 由於數字已經轉成字串, 所以判斷索引值不為字串 "0" 的情況
// 使用 backtick 將 Math.pow() 的結果跟索引值的字串分開
// 最後使用 join() 在結果中間加入 "+" 的字串並回傳

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8
```