## 編號：CANDY-006

### 程式語言：JavaScript

#### 題目：找出在數字陣列裡跟其它元素不一樣的值

```js
function findDifferent(numbers) {
  const sortArr = numbers.sort((a, b) => a - b);

  if (sortArr[0] == sortArr[1]) {
    return sortArr[sortArr.length - 1];
  }
  return sortArr[0];
}

// 設定常數使用 sort() 進行升幂排序
// 因為一個陣列裡面只有兩種數字, 所以只要比較第一個跟第二個數字是否相同
// 就可以判斷不同的數字是在最前面或是最後面

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
```