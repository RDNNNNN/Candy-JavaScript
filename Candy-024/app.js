// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  const calcGCD = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcmTwoNumbers = (a, b) => (a * b) / calcGCD(a, b);

  return numbers.reduce((lcm, num) => lcmTwoNumbers(lcm, num));
}
// 使用 GCD 函數
// 計算兩個數字的 LCM
// 使用 reduce 將多個數字依序求 LCM

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184
