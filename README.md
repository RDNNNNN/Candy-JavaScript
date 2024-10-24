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
//用sort()做排序,但預設是字串排序,需要改成數字排序
//結果 < 0,a < b,結果 > 0, == a > b,結果 == 0 , a == b
//回傳排序後的數字
const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); //印出7
console.log(sumOfSmallestValues(list2)); //印出19
```
