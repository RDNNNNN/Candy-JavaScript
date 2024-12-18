// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
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
