## 編號：CANDY-015

### 程式語言：JavaScript

#### 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線

範例：

```js
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