// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

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
