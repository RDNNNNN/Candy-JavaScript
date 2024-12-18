// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

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
