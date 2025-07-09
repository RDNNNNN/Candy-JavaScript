## 編號：CANDY-003

### 程式語言：JavaScript

#### 題目：完成函數的內容，把陣列裡的 0 都移到最後面

```js
let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const zeroArr = arr.filter((e) => e === 0);
  const otherArr = arr.filter((e) => e !== 0);

  const concatArr = otherArr.concat(zeroArr);
  return concatArr;
}

// 使用 filter() 篩選 0 的結果
// 再使用另一個 filter() 篩選非 0 的結果
// 因為 filter() 會複製出新的陣列
// 所以使用 concat() 將兩個陣列合併
// 最後回傳合併後的值

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
```