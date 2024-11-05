// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

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
// 判斷乘績是否超過10, 如果超過 10 需要再將數字進行一次切割
// 二位數的數字切割完會剩兩個單獨數字
// 設定一個常數為切割後的數字總和
// 將一開始的乘績跟判斷超過二位數的數字拆完後分別儲存變數
// 判斷數字第七位是否為7, 如果是的話用 5 取餘數來判斷是否為 0
// 如果數字第七位為7, 一樣先用 5 取餘數是否為 0
// 因為第七位為 7 拆分會變 28 再拆分一次為 1 跟 0, 所以要再 -1 的判斷

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
