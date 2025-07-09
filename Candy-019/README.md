## 編號：CANDY-019

### 程式語言：JavaScript

#### 題目：檢查是否為某個數字的平方數

```js
function isSquare(num) {
  const sqrtNum = Math.sqrt(num);
  return Math.floor(sqrtNum) == sqrtNum;
}

// Math.sqrt() 會回傳數字的平方根
//使用 Math.floor() 取整數判斷平方根是否也為整數

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(5)); // false
console.log(isSquare(100)); // true
console.log(isSquare(-4)); // false
console.log(isSquare(-1)); // false
```