// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const strLower = str.toLowerCase();
  const matchX = (strLower.match(/x/g) || []).length;
  const matchO = (strLower.match(/o/g) || []).length;
  return matchX == matchO;
}
// 設定 strLower 使用 toLowerCase() 將字串轉成小寫
//設定 matchX 與 maxthO 使用 match() 並搭配正規表達式篩選, 由於 match() 找不到會回傳null, 所以 OR 運算符使用空陣列的長度是 0 的特性來代替 null
// 比較 matchX 跟 matchO 長度是否相等並回傳

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
