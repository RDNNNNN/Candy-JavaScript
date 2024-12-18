// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  const factor = 10 ** digits;
  const shiftedNum = num * factor;
  const integerPart = Math.floor(shiftedNum);
  const decimalPart = shiftedNum - integerPart;

  if (decimalPart > 0.5) {
    return Math.ceil(shiftedNum) / factor;
  } else if (decimalPart < 0.5) {
    return Math.floor(shiftedNum) / factor;
  } else {
    const isEven = integerPart % 2 === 0;
    return (isEven ? integerPart : integerPart + 1) / factor;
  }
}
// 設定 factor用來移動小數點
// 設定 shiftedNum 用來移動小數點後的數值
// integerPart 為取整數部分
// decimalPart 為取小數部分
// 計算四捨六入
// 當小數剛好為 0.5
// 判斷整數部分是奇數還是偶數

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2
