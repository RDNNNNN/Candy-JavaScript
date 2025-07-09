## 編號：CANDY-023

### 程式語言：JavaScript

#### 題目：算出 N 個數字的最大公因數

```js
function calcGCD(...numbers) {
  const gcdTwoNumbers = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  return numbers.reduce((gcd, num) => gcdTwoNumbers(gcd, num));
}

// 計算兩個數字的 GCD
// 使用歐幾里得演算法
// 使用 reduce 將多個數字依序求 GCD

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
```