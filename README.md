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

# 編號：CANDY-005

### 程式語言：JavaScript

### 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

```js
function squareDigits(num) {
  const splitNum = num.toString().split("");
  const calcNum = splitNum.map((x) => x * x);
  return calcNum.join("");
}
// 使用 toString() 轉成字串
// 再使用 split() 分割內容, 如果內容是空字串則會每個字符都被分割
// 設定一個常數使用 map() 將分割的內容做平方運算
// 最後使用 join() 組合並回傳值, join() 預設會有, 隔開所以使用空字串去除

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
```

# 編號：CANDY-006

### 程式語言：JavaScript

### 題目：找出在數字陣列裡跟其它元素不一樣的值

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

# 編號：CANDY-007

### 程式語言：JavaScript

### 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

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

# 編號：CANDY-008

### 程式語言：JavaScript

### 題目：傳入一字串，計算得分最高的字

### 英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。

### 所有傳入的字都是小寫。

```js
function highestScoreWord(input) {
  const splitInput = input.split(" ");
  const mapInput = splitInput.map((e) =>
    e
      .split("")
      .map((d) => d.charCodeAt() - 96)
      .reduce((num, nextNum) => num + nextNum)
  );
  const maxInput = Math.max(...mapInput);
  const maxScore = mapInput.reduce((num, nextNum) =>
    num > nextNum ? num : nextNum
  );
  return splitInput[mapInput.indexOf(maxScore)];
}
// 先設定一個常數並使用 split(" ") 切割, 因為有加空格所以是將字串中的空格作為切割點
// 設定一個常數並使用 map() 的方式再使用 split() 做單個字串的切割
// charCodeAt() 不能直接對陣列使用, 所以再使用 map() 讓 charCodeAt() 可以使用
// 由於轉換後的數字會變成 ASCII 字元, 以 a 來說的十進位會變成從 97 照順序計算
// 題目是以 a 為 1 分, 因此要再減掉 96 後使用 reduce() 將字串做累加
// 設定一個常數並使用 Math.max() 的方法抓出最大值
// 設定一個常數並使用 reduce() 比較值, 使用三元運算子判斷
// 如果當值比後值大回傳當值, 否則為後值
// 最後回傳第一次切割的字串並使用 indexOf() 抓出索引值

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
```

# 編號：CANDY-009

### 程式語言：JavaScript

### 題目：移除網址中的錨點（Anchor）

```js
function removeAnchor(url) {
  return url.split("#")[0];
}
// 使用 split() 將 # 作為切割點, 第二個值為返回值
// 由於已經被 # 分割成兩半, 一半為#之前, 另一半為 # 之後
// 利用索引值抓取前面的值並回傳

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 t5xcampus.com/courses/?page=1
```
