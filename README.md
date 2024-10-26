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

# 編號：CANDY-003

### 程式語言：JavaScript

### 題目：完成函數的內容，把陣列裡的 0 都移到最後面

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

# 編號：CANDY-004

### 程式語言：JavaScript

### 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

```js
function humanReadableTimer(seconds) {
  const hour = String(Math.floor(seconds / 3600)).padStart(2, 0);
  const min = String(Math.floor(seconds % 3600) % 60).padStart(2, 0);
  const sec = String(Math.floor(seconds % 60)).padStart(2, 0);
  const timer = `${hour}:${min}:${sec}`;
  return timer;
}
// 先設定 hour 的常數因為小時是為秒除以 3600, 需要去除餘數所以使用 Math.floor()
// 使用 padStart() 增加 0 (第一個值為總共需要幾個值, 第二個值為要顯示的內容)
// padStart() 需為字串才能使用, 所以需要在前面新增一個 String
// 分鐘需要除以 60 才會為秒, 但因為要進位還需要判斷餘數是否為 60
// 秒數只需要判斷餘數是否為60即可
// 設定 time 的常數並使用 backtick 的方式將內容串連
// 回傳 timer

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
```
