## 編號：CANDY-007

### 程式語言：JavaScript

#### 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

```js
function findSomeDifferent(numbers) {
  const evens = sortNum.filter((e) => e % 2 !== 0);
  const odds = sortNum.filter((e) => e % 2 === 0);

  return evens.length === 1 ? evens[0] : odds[0];
}

// 設定一個常數並使用 filter() 取餘數的方式判斷奇數
// 設定一個常數使用 filter() 取餘數的方式判斷偶數
// 使用三元運算子判斷奇數長度是否等於 1, 因爲題目只有一個奇數跟偶數
// true 就會回傳唯一的奇數, false 就會回傳唯一的偶數

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
```