# 編號：CANDY-001

### 程式語言：JavaScript

### 題目：找出陣列裡最小的兩個值的總和
 
```js
例如：

[15, 28, 4, 2, 43] 印出 6

[23, 71, 33, 82, 1] 印出 24
```

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
// padStart() 需為字串才能使用, 所以需要在前面新增一個 String()
// 分鐘需要除以 60 才會為秒, 但因為要進位還需要判斷餘數是否為 60
// 秒數只需要判斷餘數是否為 60 即可
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

英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。

所有傳入的字都是小寫。

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
// 由於已經被 # 分割成兩半, 一半為 # 之前, 另一半為 # 之後
// 利用索引值抓取前面的值並回傳

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 t5xcampus.com/courses/?page=1
```

# 編號：CANDY-010

### 程式語言：JavaScript

### 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數

```js
範例：

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

# 編號：CANDY-011

### 程式語言：JavaScript

### 題目：找出一個數字陣列裡，出現奇數次數的數字

```js
範例：

[1, 1, 0]，`0` 只有出現 1 次

[5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次
```

```js
function findOddElm(numbers) {
  return (numbersReduce = numbers.reduce((e, i) => e ^ i));
}

// 使用 reduce() 設定初始值以及累加值
// 利用 XOR 二進制相同數字會等於 0, 相異數字會等於 1 的特性來抓出奇數次數的數字並回傳

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5
```

# 編號：CANDY-012

### 程式語言：JavaScript

### 題目：把數字加總，最終濃縮成個位數

```js
範例：

9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5

1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1
```

```js
const numberReducer = (num) => {
  while (num >= 10) {
    num = [...String(num)].map(Number).reduce((acc, cur) => acc + cur);
  }
  return num;
};

// 使用 while 迴圈, 將條件設定為 >= 10, 因為只要超過二位數就需要進行一次運算
// 使用展開運算符 (...) 將迴圈的數字透過 String() 轉成字串陣列
// 使用 map() 陣列字串轉成數字, 最後 reduce() 進行加總並回傳

console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9
```

# 編號：CANDY-013

### 程式語言：JavaScript

### 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確

[規則網址](https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283)

```js
function isValidVatNumber(vat) {
  let result = 0;

  const logicMult = "12121241".split("").map(Number);
  for (let i = 0; i < vat.length; i++) {
    const multSum = Number(logicMult[i] * vat[i]);

    if (multSum >= 10) {
      const twoDigits = String(multSum).split("").map(Number);
      const twoDigitsSum = twoDigits[0] + twoDigits[1];

      result += twoDigitsSum;
    } else {
      result += multSum;
    }
  }

  if (Number(vat[6]) !== 7) {
    return result % 5 === 0;
  } else {
    if (result % 5 === 0) {
      return result % 5 === 0;
    } else {
      return (result - 1) % 5 === 0;
    }
  }
}

// 先設定一個變數用於儲存結果
// 將邏輯乘數分割後轉成數字
// 寫一個 for 迴圈
// 建立一個常數為邏輯乘數以及迭代數字的乘績
// 判斷乘績是否超過 10, 如果超過 10 需要再將數字進行一次切割
// 二位數的數字切割完會剩兩個單獨數字
// 設定一個常數為切割後的數字總和
// 將一開始的乘績跟判斷超過二位數的數字拆完後分別儲存變數
// 判斷數字第七位是否為 7, 如果是的話用 5 取餘數來判斷是否為 0
// 如果數字第七位為 7, 一樣先用 5 取餘數是否為 0
// 因為第七位為 7 拆分會變 28 再拆分一次為 1 跟 0, 所以要再 -1 的判斷

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
```

# 編號：CANDY-014

### 程式語言：JavaScript

### 題目：把鄰近的重複值去除，但仍照原本的順序排序

```js
範例：

"AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']
```

```js
function uniqueOrder(sequence) {
  const arr = [];

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i + 1]) {
      arr.push(sequence[i]);
    }
  }
  return arr;
}

// 先設定一個空陣列, 寫一個 for 迴圈
// 判斷迴圈的前一個值跟後一個如果不相同, 將當前值 push() 到空陣列
// 將 push() 後的陣列回傳

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]
```

# 編號：CANDY-015

### 程式語言：JavaScript

### 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線

```js
範例：

"abcdef" -> ['ab', 'cd', 'ef']
"abcdefg" -> ['ab', 'cd', 'ef', 'g_']
```

```js
function splitString(str) {
  if (str === "") return [];
  return (str.length % 2 == 0 ? str : str + "_").match(/.{2}/g);
}

// 判斷字串是空字串時回傳空陣列
// 如果不是空字串時, 字串取 2 的餘數為 0 回傳原本的陣列
// 如果不為 0, 表示有字串是單獨的則在字串後面加 "_"
// 最後使用 match() 並搭配正規表達式, 表示 \n 跟 \r 以外的單個字元
// \n 是換行符, \r 是回車字元, {2} 為符合 2 次, /g 為全局匹配

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
```

# 編號：CANDY-016

### 程式語言：JavaScript

### 題目：把原本 snake_case 的字轉換成 camelCase 格式

```js
範例：

"hello_world" -> "helloWorld"
```

```js
function toCamelCase(str) {
  return str
    .split("_")
    .map((value, index) => {
      if (index !== 0) {
        return value[0].toUpperCase() + value.slice(1);
      }
      return value;
    })
    .join("");
}

// 使用split() 將 "_" 作為分割點
// 使用 map() 分別帶入值跟索引值的參數
// 判斷索引值不為 0 的情況
// 將第一個字轉為大寫並且使用 slice() 加上原本值的第二個字的後面內容
// 如果為 0 代表是分割點 ("_") 前面的值則直接回傳
// 最後使用 join() 將兩個分割的字串相加

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
```

# 編號：CANDY-017

### 程式語言：JavaScript

### 題目：計算數字的 2 進位裡有幾個 1

```js
範例：

5 -> 101 -> 2 個 1
```

```js
function countBits(num) {
  let result = 0;
  const numBinary = num.toString(2);
  for (let i = 0; i < numBinary.length; i++) {
    if (Number(numBinary[i]) == 1) {
      result += 1;
    }
  }
  return result;
}

// 設定一個變數 result
// 設定一個常數 numbinary 為二進位後的字串
// 寫一個 for 迴圈
// 判斷當值是否為 1, 如果是就加 1 到變數裡面並回傳

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
```

# 編號：CANDY-018

### 程式語言：JavaScript

### 題目：實作一個可以印出隨機整數的函數

```js
const randomNumber = function (min, ...max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// 帶入兩個參數 (min,...max)
// 不確定幾個參數時使用其餘運算符
// 其餘運算符沒有帶入值的時候在運算時會轉成空陣列 []
// 接著轉成字串最後轉成 0
// 隨機範圍需要最終值減去初始值後並加上初始值
// 加上初始值是為了讓減去的結果範圍移動到初始值是最終值之間

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
```

# 編號：CANDY-019

### 程式語言：JavaScript

### 題目：檢查是否為某個數字的平方數

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

# 編號：CANDY-020

### 程式語言：JavaScript

### 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

```js
function xxoo(str) {
  const strLower = str.toLowerCase();
  const matchX = (strLower.match(/x/g) || []).length;
  const matchO = (strLower.match(/o/g) || []).length;
  return matchX == matchO;
}

// 設定 strLower 使用 toLowerCase() 將字串轉成小寫
// 設定 matchX 與 maxthO 使用 match() 並搭配正規表達式篩選, 由於 match() 找不到會回傳 null, 所以 OR 運算符使用空陣列的長度是 0 的特性來代替 null
// 比較 matchX 跟 matchO 長度是否相等並回傳

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
```

# 編號：CANDY-021

### 程式語言：JavaScript

### 題目：實作 Stack 資料結構

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    if (element !== undefined) {
      this.items.push(element);
    }
  }

  pop() {
    return this.items.pop();
  }

  get size() {
    return this.items.length;
  }
}

// 用陣列來儲存堆疊的元素
// 添加元素到堆疊頂端
// 移除並返回堆疊頂端的元素
// 獲取堆疊中元素的數量

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0
```

# 編號：CANDY-022

### 程式語言：JavaScript

### 題目：實作 Queue 資料結構

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    if (element !== undefined) {
      this.items.push(element);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  get length() {
    return this.items.length;
  }
}

// 使用陣列儲存隊列的元素
// 將元素加入隊列的尾端
// 移除並返回隊列的前端元素
// 陣列的 shift 方法移除並返回第一個元素
// 獲取隊列中元素的數量

const queue = new Queue();
queue.enqueue(123);
queue.enqueue(456);
queue.enqueue();
console.log(queue.length); // 印出 2

const item = queue.dequeue(); // 取出元素
console.log(item); // 印出 123

queue.dequeue(); // 繼續取出元素
console.log(queue.length); // 印出 0
```

# 編號：CANDY-023

### 程式語言：JavaScript

### 題目：算出 N 個數字的最大公因數

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

# 編號：CANDY-024

### 程式語言：JavaScript

### 題目：算出 N 個數字的最小公倍數

提示：可使用 023 計算最大公因數的函數

```js
function calcLCM(...numbers) {
  const calcGCD = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcmTwoNumbers = (a, b) => (a * b) / calcGCD(a, b);

  return numbers.reduce((lcm, num) => lcmTwoNumbers(lcm, num));
}

// 使用 GCD 函數
// 計算兩個數字的 LCM
// 使用 reduce 將多個數字依序求 LCM

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184
```

# 編號：CANDY-025

### 程式語言：JavaScript

### 題目：

一般我們常見的四捨五入計算方式在統計上容易造成計算偏差，於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差，計算方式是「四捨六入五成雙」，當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數。

```js
function bankersRounding(num, digits = 0) {
  const factor = 10 ** digits;
  const shiftedNum = num * factor;
  const integerPart = Math.floor(shiftedNum);
  const decimalPart = shiftedNum - integerPart;

  if (decimalPart > 0.5) {
    return Math.ceil(shiftedNum) / factor;
  } else if (decimalPart < 0.5) {
    return Math.floor(shiftedNum) / factor;
  } else {
    const isEven = integerPart % 2 === 0;
    return (isEven ? integerPart : integerPart + 1) / factor;
  }
}

// 設定 factor 用來移動小數點
// 設定 shiftedNum 用來移動小數點後的數值
// integerPart 為取整數部分
// decimalPart 為取小數部分
// 計算四捨六入
// 當小數剛好為 0.5
// 判斷整數部分是奇數還是偶數

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2
```
