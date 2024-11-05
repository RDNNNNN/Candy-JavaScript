// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  while (num >= 10) {
    num = [...String(num)].map(Number).reduce((acc, cur) => acc + cur);
  }
  return num;
};

// 使用 while 迴圈, 將條件設定為 >=10, 因為只要超過二位數就需要進行一次運算
// 使用展開運算符 (...) 將迴圈的數字透過 String 轉成字串陣列
// 使用 map() 陣列字串轉成數字, 最後 reduce() 進行加總並回傳

console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9
