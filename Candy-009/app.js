// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  return url.split("#")[0];
}
// 使用 split() 將 # 作為切割點, 第二個值為返回值
// 由於已經被 # 分割成兩半, 一半為#之前, 另一半為 # 之後
// 利用索引值抓取前面的值並回傳

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 t5xcampus.com/courses/?page=1
