// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

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
