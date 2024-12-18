// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  const arr = [];

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i + 1]) {
      arr.push(sequence[i]);
    }
  }
  return arr;
}
// 先設定一個空陣列, 寫一個 for 迴圈
// 判斷迴圈的前一個值跟後一個如果不相同, 將當前值 push() 到空陣列
// 將 push() 後的陣列回傳
console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]
