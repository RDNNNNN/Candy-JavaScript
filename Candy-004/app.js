// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const hour = String(Math.floor(seconds / 3600)).padStart(2, 0);
  const min = String(Math.floor(seconds % 3600) % 60).padStart(2, 0);
  const sec = String(Math.floor(seconds % 60)).padStart(2, 0);
  const timer = `${hour}:${min}:${sec}`;
  return timer;
}
// 先設定 hour 的常數因為小時是為秒除以3600, 需要去除餘數所以使用 Math.floor()
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
